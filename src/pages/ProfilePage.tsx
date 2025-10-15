import React, { useState } from "react";
import Profile from "../components/profile";
import Sidebar from "../components/sidebar";
import { Menu } from "lucide-react";
import Navbar from "../components/navbar";

const ProfilePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Ouvre la sidebar dès le premier clic (pointer down)
  const openSidebar = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSidebarOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0b1221] text-white">
      {/* Sidebar desktop */}
      <div className="hidden md:block w-60 bg-gray-900 h-screen fixed top-0 left-0 z-50">
        <Sidebar />
      </div>

      {/* Sidebar mobile (visible si sidebarOpen) */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-60 h-full bg-gray-900 z-[100] p-4 md:hidden"
          onPointerDown={(e) => e.stopPropagation()} // empêche la fermeture en cliquant dedans
        >
          <Sidebar />
        </div>
      )}

      {/* Navbar mobile */}
      <div
        className="block md:hidden w-full bg-gray-900 h-16 fixed top-0 left-0 flex items-center justify-between px-4 z-50"
        onPointerDown={() => {}} // capte le clic sur la navbar sans interférer
      >
        <h1 className="text-xl font-bold">SIMPLY</h1>

        {/* bouton: ouverture sidebar */}
        <button
          aria-label="Open menu"
          onPointerDown={openSidebar}
          className="focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 md:ml-60 mt-16 md:mt-0 p-4">
        <Navbar/>
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
