// MainContent.tsx


import React from 'react';
import PersonalInformationCard from './PersonalInformationCard';
import AccountPreferencesCard from './AccountPreferencesCard';


const profile: React.FC = () => {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

      {/* A. Section Profil (Image et Nom) */}
      <section className="flex items-center mb-10">
        <div className="w-28 h-28 rounded-full overflow-hidden mr-6 ring-4 ring-blue-500">
            {/* Image réelle ici */}
            <img src="https://via.placeholder.com/150/0000FF/808080?text=S.K." alt="Profile" className="w-full h-full object-cover"/>
        </div>
        <div>
          <h3 className="text-3xl font-bold">Sarah K.</h3>
          <p className="text-sm text-gray-400 mb-2">Admin</p>
          <button className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition duration-200">
            Change photos
          </button>
        </div>
      </section>

      {/* B. Grille Principale (Utilise Tailwind Grid) */}
      {/* La grille est divisée en 3 colonnes pour les grands écrans (lg:grid-cols-3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* B.1. Colonne/Zone Information Personnelle (Prend 2/3 de la largeur) */}
        <div className="lg:col-span-2">
          {/* Composant PersonalInformationCard */}
          <PersonalInformationCard />
        </div>
        
        {/* B.2. Colonne/Zone Préférences (Prend 1/3 de la largeur) */}
        <div className="lg:col-span-1 flex flex-col space-y-8">
          
          {/* Composant AccountPreferencesCard pour les Toggles */}
          <AccountPreferencesCard title="Account Preferences" />
          
          {/* Composant AccountPreferencesCard pour les Liens Sociaux */}
          <AccountPreferencesCard title="Account Preferences" socialLinks={true} />
        </div>
      </div>
    </main>
  );
};

export default profile;