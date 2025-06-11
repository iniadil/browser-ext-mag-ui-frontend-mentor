"use client";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import ListCards from "./components/ListCards";
import { useInitializeExtensions } from "./hooks/useInitializeExtensions";
import Footer from "./components/Footer";

export default function Page() {
  // Initialize extensions data from JSON file
  useInitializeExtensions();

  return (
    <main>
      {/* Top Menu */}
      <Navbar />

      {/* Filter */}
      <Filter />

      {/* List of Cards */}
      <ListCards />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
