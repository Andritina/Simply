// ProfilePage.tsx - Structure pour Navbar et Sidebar Fixes

import React from 'react';

import Profile from '../components/profile';
import { Sidebar } from 'lucide-react';
import Navbar from '../components/navbar';




const ProfilePage: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar fixe */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
        <Navbar />
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-4">Analyse</h2>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;