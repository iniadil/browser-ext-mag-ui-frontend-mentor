"use client";

import {
  useExtensionsStore,
  type FilterType,
} from "../store/useExtensionsStore";
import { useTheme } from "next-themes";
import { cx } from "../utils/cx";
import { useEffect, useState } from "react";

const filterOptions: FilterType[] = ["All", "Active", "Inactive"];

export default function Filter() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme } = useTheme();
  const filter = useExtensionsStore((state) => state.filter);
  const setFilter = useExtensionsStore((state) => state.setFilter);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  const currentTheme = resolvedTheme || theme;

  if (!mounted) {
    return (
      <div className="container mx-auto flex animate-pulse gap-x-2 p-4">
        <div className="h-12 w-full rounded-2xl bg-white/80" />
        <div className="h-12 w-1/2 rounded-2xl bg-white/80" />
      </div>
    );
  }

  return (
    <section className="container mx-auto flex flex-col justify-between p-4 py-2 md:flex-row">
      <div className="flex flex-col justify-center">
        <h1 className="text-center">Extensions List</h1>
      </div>

      {/* Item Filter */}
      <div className="flex items-center justify-center py-2">
        <div className="space-x-2" id="filter-buttons">
          {filterOptions.map((option) => (
            <button
              key={option}
              className={filter === option ? "active" : "inactive"}
              onClick={() => handleFilterChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
