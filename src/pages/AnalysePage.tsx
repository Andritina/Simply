import React, { useState } from "react";
import Analyse from "../components/analyse";
import Sidebar from "../components/sidebar";
import { Menu } from "lucide-react";

const AnalysePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar mobile
  const toggleSidebar = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  // Fermer sidebar si clic à l'extérieur
  const closeSidebar = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-[#0b1221] text-white"
      onPointerDown={closeSidebar} // clic en dehors ferme la sidebar mobile
    >
      {/* Sidebar desktop */}
      <div className="hidden md:block w-60 bg-gray-900 h-screen fixed top-0 left-0 z-50">
        <Sidebar />
      </div>

      {/* Sidebar mobile (visible si sidebarOpen) */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-60 h-full bg-gray-900 z-[100] p-4 md:hidden"
          onPointerDown={(e) => e.stopPropagation()} // empêche la fermeture au clic à l'intérieur
        >
          <Sidebar />
        </div>
      )}

      {/* Navbar mobile */}
      <div className="block md:hidden w-full bg-gray-900 h-16 fixed top-0 left-0 flex items-center justify-between px-4 z-50">
        <h1 className="text-xl font-bold">SIMPLY</h1>

        {/* bouton toggle */}
        <button
          aria-label="Open menu"
          onPointerDown={toggleSidebar}
          className="focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 md:ml-60 mt-16 md:mt-0 p-4">
        <Analyse />
      </div>
    </div>
  );
};

export default AnalysePage;
