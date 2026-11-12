import { forwardRef } from "react";

interface CalculatorInputProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  unit?: string;
  error?: string;
  helper?: string;
  min?: number;
  max?: number;
  step?: string;
  type?: "number" | "text";
  id?: string;
}

export const CalculatorInput = forwardRef<HTMLInputElement, CalculatorInputProps>(
  function CalculatorInput(
    {
      label,
      value,
      onChange,
      unit,
      error,
      helper,
      min,
      max,
      step = "any",
      type = "number",
      id,
    },
    ref
  ) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="mb-4">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          {label}
          {unit && (
            <span className="text-slate-400 font-normal ml-1">({unit})</span>
          )}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={min}
            max={max}
            step={step}
            className="w-full rounded-md border border-border bg-white dark:bg-slate-900 px-3 py-2 pr-16 text-slate-900 dark:text-slate-50 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
          />
          {unit && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
              {unit}
            </span>
          )}
        </div>
        {helper && !error && (
          <p className="mt-1 text-xs text-slate-500">{helper}</p>
        )}
        {error && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

CalculatorInput.displayName = "CalculatorInput";