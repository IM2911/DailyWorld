import { useState } from "react";

export function useElectricityPrice(initial = "0.15") {
  const [price, setPrice] = useState(initial);
  const [priceError, setPriceError] = useState<string | undefined>();

  const validatePrice = (raw: string) => {
    const n = parseFloat(raw);
    if (raw === "") return { valid: true, value: 0, error: undefined };
    if (isNaN(n)) return { valid: false, value: 0, error: "Enter a valid number." };
    if (n < 0) return { valid: false, value: 0, error: "Price cannot be negative." };
    if (n > 1) return {
      valid: false,
      value: 0,
      error: "Price seems high. Check cents vs dollars (e.g. 0.15 not 15).",
    };
    return { valid: true, value: n, error: undefined };
  };

  const handleChange = (raw: string) => {
    setPrice(raw);
    const v = validatePrice(raw);
    setPriceError(v.error);
  };

  return { price, priceError, setPrice, validatePrice, handleChange };
}