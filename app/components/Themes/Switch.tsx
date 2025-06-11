"use client";

import { useState } from "react";
import { cx } from "@/app/utils/cx";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

const Switch = ({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
  label,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isChecked;
    setIsChecked(newValue);
    onCheckedChange?.(newValue);
  };

  return (
    <div className="flex items-center gap-2">
      {label && <span className="mr-2 text-sm">{label}</span>}
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleToggle}
        className={cx(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          isChecked
            ? "bg-primary-extrabold dark:bg-primary"
            : "bg-gray-300 dark:bg-neutral-700",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <span
          className={cx(
            "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
            isChecked ? "translate-x-5" : "translate-x-0",
          )}
        />
      </button>
    </div>
  );
};

export default Switch;
