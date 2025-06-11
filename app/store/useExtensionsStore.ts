import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the Extension interface
export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

// Define filter types
export type FilterType = "All" | "Active" | "Inactive";

// Define the store interface
interface ExtensionsStore {
  // State
  extensions: Extension[];
  filter: FilterType;

  // Actions
  setExtensions: (extensions: Extension[]) => void;
  toggleExtension: (name: string) => void;
  removeExtension: (name: string) => void;
  setFilter: (filter: FilterType) => void;

  // Computed values
  getFilteredExtensions: () => Extension[];
}

// Create the Zustand store with persistence
export const useExtensionsStore = create<ExtensionsStore>()(
  persist(
    (set, get) => ({
      // Initial state
      extensions: [],
      filter: "All",

      // Actions
      setExtensions: (extensions) => set({ extensions }),

      toggleExtension: (name) =>
        set((state) => ({
          extensions: state.extensions.map((ext) =>
            ext.name === name ? { ...ext, isActive: !ext.isActive } : ext,
          ),
        })),

      removeExtension: (name) =>
        set((state) => ({
          extensions: state.extensions.filter((ext) => ext.name !== name),
        })),

      setFilter: (filter) => set({ filter }),

      // Computed getter
      getFilteredExtensions: () => {
        const { extensions, filter } = get();
        switch (filter) {
          case "Active":
            return extensions.filter((ext) => ext.isActive);
          case "Inactive":
            return extensions.filter((ext) => !ext.isActive);
          default:
            return extensions;
        }
      },
    }),
    {
      name: "extensions-storage", // name of localStorage key
      partialize: (state) => ({
        extensions: state.extensions,
        filter: state.filter,
      }), // only persist these fields
    },
  ),
);
