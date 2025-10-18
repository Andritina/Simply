// MainContent.tsx
import React from 'react';
import PersonalInformationCard from './PersonalInformationCard';
import AccountPreferencesCard from './AccountPreferencesCard';

const Profile: React.FC = () => {
  return (
    <main className="flex-1 p-8 overflow-y-auto bg-gray-900 text-gray-100">
      {/* Titre principal */}
      <h2 className="text-3xl font-semibold mb-8 text-white border-b border-gray-700 pb-3">
        My Profile
      </h2>

      {/* A. Section Profil (Image + Nom + Bouton) */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start mb-10 bg-gray-800 rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-750">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500 shadow-lg mb-4 sm:mb-0 sm:mr-6">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-white">Sarah K.</h3>
          <p className="text-sm text-blue-400 mb-4">Administrator</p>
          <button className="text-xs bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full font-semibold tracking-wide transition duration-200">
            Change Photo
          </button>
        </div>
      </section>

      {/* B. Grille Principale */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* B.1 - Informations personnelles (2/3) */}
          <div className="lg:col-span-2">
            <PersonalInformationCard />
          </div>

          {/* B.2 - Préférences (1/3) */}
          <div className="lg:col-span-1 flex flex-col space-y-8">
            <AccountPreferencesCard title="Account Preferences" />
            <AccountPreferencesCard title="Social Links" socialLinks={true} />
          </div>

        </div>
      </section>
    </main>
  );
};

export default Profile;
