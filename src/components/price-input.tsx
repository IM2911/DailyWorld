import { CalculatorInput } from "./calculator-input";

interface ElectricityPriceInputProps {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

export function ElectricityPriceInput({
  value,
  onChange,
  error,
}: ElectricityPriceInputProps) {
  return (
    <CalculatorInput
      label="Electricity price"
      value={value}
      onChange={onChange}
      unit="$/kWh"
      helper="Your local rate from your utility bill. US average is about $0.15/kWh."
      error={error}
    />
  );
}