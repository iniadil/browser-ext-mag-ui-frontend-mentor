"use client";

import Card from "./Themes/Card";
import { useExtensionsStore } from "../store/useExtensionsStore";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ListCards() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !theme) {
      const systemTheme =
        resolvedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      setTheme(systemTheme);
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  const getFilteredExtensions = useExtensionsStore(
    (state) => state.getFilteredExtensions,
  );
  const filtered = useExtensionsStore((state) => state.filter);
  const toggleExtension = useExtensionsStore((state) => state.toggleExtension);
  const removeExtension = useExtensionsStore((state) => state.removeExtension);

  const filteredExtensions = getFilteredExtensions();

  const handleToggleExtension = (name: string) => {
    toggleExtension(name);
  };

  const handleRemoveExtension = (name: string) => {
    removeExtension(name);
  };

  const currentTheme = resolvedTheme || theme;

  if (!mounted)
    return (
      <div className="container mx-auto flex animate-pulse gap-x-2 p-4">
        <div className="h-12 w-full rounded-2xl bg-white/80" />
        <div className="h-12 w-1/2 rounded-2xl bg-white/80" />
      </div>
    );

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredExtensions.length > 0 ? (
          filteredExtensions.map((item, index) => (
            <Card
              key={`${item.name}-${index}`}
              className="transition-shadow duration-300 hover:shadow-lg"
              imageSrc={item.logo}
              title={item.name}
              description={item.description}
              onRemove={() => handleRemoveExtension(item.name)}
              checked={item.isActive}
              onToggle={() => handleToggleExtension(item.name)}
            />
          ))
        ) : (
          <div className="col-span-full py-8 text-center">
            No extensions found for filter: {filtered}
          </div>
        )}
      </div>
    </section>
  );
}
