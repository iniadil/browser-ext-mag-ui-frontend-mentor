import { useEffect } from "react";
import { useExtensionsStore } from "../store/useExtensionsStore";
import DataJSON from "@/public/data.json";

// Custom hook to initialize extensions data
export const useInitializeExtensions = () => {
  const setExtensions = useExtensionsStore((state) => state.setExtensions);
  const extensions = useExtensionsStore((state) => state.extensions);

  useEffect(() => {
    // Only initialize if extensions array is empty (first load)
    if (extensions.length === 0) {
      setExtensions(DataJSON);
    }
  }, [setExtensions, extensions.length]);
};
