/**
 * Shared electricity calculation utilities.
 * All values are estimates based on realistic assumptions.
 * Measured consumption should come from a meter reading, not these formulas.
 */

export interface CalcResult {
  value: number;
  unit: string;
  formatted: string;
}

export interface CostResult {
  costPerHour: number;
  costPerDay: number;
  costPerWeek: number;
  costPerMonth: number;
  costPerYear: number;
  kWhPerHour: number;
  kWhPerDay: number;
  kWhPerMonth: number;
  kWhPerYear: number;
}

export interface SavingsResult {
  oldAnnualCost: number;
  newAnnualCost: number;
  annualSavings: number;
  monthlySavings: number;
  percentSaved: number;
  paybackYears: number | null;
}

/**
 * Convert watts to kilowatts.
 */
export function wattsToKilowatts(watts: number): number {
  return watts / 1000;
}

/**
 * Calculate energy consumed (kWh) over a given number of hours per day.
 */
export function energyKWh(
  watts: number,
  hoursPerDay: number,
  days: number = 30
): number {
  return (watts / 1000) * hoursPerDay * days;
}

/**
 * Calculate cost from kWh and price per kWh.
 */
export function costFromKWh(kWh: number, pricePerKWh: number): number {
  return kWh * pricePerKWh;
}

/**
 * Build a full cost breakdown for an appliance.
 */
export function applianceCost(
  watts: number,
  hoursPerDay: number,
  pricePerKWh: number
): CostResult {
  const kWhPerHour = watts / 1000;
  const kWhPerDay = kWhPerHour * hoursPerDay;
  const kWhPerMonth = kWhPerDay * 30;
  const kWhPerYear = kWhPerDay * 365;

  return {
    costPerHour: kWhPerHour * pricePerKWh,
    costPerDay: kWhPerDay * pricePerKWh,
    costPerWeek: kWhPerDay * 7 * pricePerKWh,
    costPerMonth: kWhPerMonth * pricePerKWh,
    costPerYear: kWhPerYear * pricePerKWh,
    kWhPerHour,
    kWhPerDay,
    kWhPerMonth,
    kWhPerYear,
  };
}

/**
 * Calculate monthly electricity bill from total kWh and price.
 */
export function monthlyBill(
  kWh: number,
  pricePerKWh: number
): { bill: number; pricePerKWh: number; kWh: number } {
  return {
    kWh,
    pricePerKWh,
    bill: kWh * pricePerKWh,
  };
}

/**
 * Convert kWh to cost.
 */
export function kWhToCost(kWh: number, pricePerKWh: number): number {
  return kWh * pricePerKWh;
}

/**
 * Calculate savings when replacing an old appliance with a new one.
 */
export function energySavings(
  oldWatts: number,
  newWatts: number,
  hoursPerDay: number,
  pricePerKWh: number,
  newAppliancePrice: number = 0
): SavingsResult {
  const oldAnnualKWh = (oldWatts / 1000) * hoursPerDay * 365;
  const newAnnualKWh = (newWatts / 1000) * hoursPerDay * 365;
  const oldAnnualCost = oldAnnualKWh * pricePerKWh;
  const newAnnualCost = newAnnualKWh * pricePerKWh;
  const annualSavings = oldAnnualCost - newAnnualCost;
  const monthlySavings = annualSavings / 12;
  const percentSaved =
    oldAnnualCost > 0 ? (annualSavings / oldAnnualCost) * 100 : 0;
  const paybackYears =
    annualSavings > 0 && newAppliancePrice > 0
      ? newAppliancePrice / annualSavings
      : null;

  return {
    oldAnnualCost,
    newAnnualCost,
    annualSavings,
    monthlySavings,
    percentSaved,
    paybackYears,
  };
}

/**
 * Compare electricity prices across regions/plans.
 */
export function priceComparison(
  kWh: number,
  prices: { label: string; pricePerKWh: number }[]
) {
  return prices.map((p) => ({
    label: p.label,
    pricePerKWh: p.pricePerKWh,
    monthlyCost: kWh * p.pricePerKWh,
    annualCost: kWh * p.pricePerKWh * 12,
  }));
}

/**
 * Format a number as currency.
 */
export function formatCurrency(
  value: number,
  currency: string = "USD",
  decimals: number = 2
): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  } catch {
    return `$${value.toFixed(decimals)}`;
  }
}

/**
 * Format a number with commas.
 */
export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format kWh with 2 decimals.
 */
export function formatKWh(kWh: number): string {
  return `${kWh.toFixed(2)} kWh`;
}

/**
 * Format watts.
 */
export function formatWatts(watts: number): string {
  return `${formatNumber(watts, 0)} W`;
}