// src/pages/Createurs.tsx

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'; 

// --------------------------------------------------
// A. Composant Carte de Métrique (MetricCard)
// --------------------------------------------------
interface MetricCardProps {
  title: string;
  amount: string;
  subtitle: string;
  type?: 'revenue' | 'permanent';
  iconUrl?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, amount, subtitle, type = 'revenue', iconUrl = 'https://i.pravatar.cc/30?img=1' }) => (
  <div className="p-4 rounded-xl bg-gray-800 h-full flex flex-col justify-between">
    <div className="mb-2">
        {type === 'revenue' && (
            <div className="flex items-center mb-1">
                <img 
                    src={iconUrl} 
                    alt="avatar" 
                    className="w-6 h-6 rounded-full mr-2" 
                />
                <p className="font-semibold text-sm text-gray-200">{title}</p>
            </div>
        )}
        {type === 'permanent' && <p className="font-semibold text-sm text-gray-200">{title}</p>}
    </div>
    <div className="flex flex-col">
        <h3 className={`text-xl font-bold ${type === 'revenue' ? 'text-white' : 'text-gray-200'}`}>{amount}</h3>
        <p className="text-sm text-gray-400 mt-1">
            {subtitle}
        </p>
    </div>
  </div>
);

// --------------------------------------------------
// B. Composant Panneau de Droite (RightPanel)
// --------------------------------------------------
const PermissionItem: React.FC<{ text: string; active?: boolean }> = ({ text, active = false }) => (
    <div className={`py-2 px-3 text-sm cursor-pointer transition-colors 
                    ${active ? 'bg-green-600 rounded-lg font-semibold' : 'text-gray-300 hover:bg-gray-800 rounded-lg'}`}>
        {text}
    </div>
);

const RightPanel: React.FC = () => (
    // On cache le panneau de droite sur les très petits écrans, il devient visible en empilement à partir du breakpoint 'lg'
    <div className="w-full lg:w-80 bg-gray-900 border-t lg:border-t-0 lg:border-l border-gray-800 p-6 flex flex-col space-y-8">
      
      {/* Role & Permission Section */}
      <div>
        <div className="flex justify-between items-center mb-4 cursor-pointer">
          <h2 className="font-semibold text-lg">Role & permission</h2>
          <IoIosArrowDown className="w-5 h-5 text-gray-400" />
        </div>
        {/* ... (Reste du contenu RightPanel inchangé) ... */}
        <div className="bg-gray-800 p-3 rounded-xl mb-4">
            <div className="flex items-center">
                <img src="https://i.pravatar.cc/30?img=5" alt="avatar" className="w-8 h-8 rounded-full mr-3" />
                <span className="font-semibold text-lg">Tips</span>
            </div>
        </div>
        <div className="space-y-1">
            <PermissionItem text="Manage users" />
            <PermissionItem text="Media" />
            <PermissionItem text="View" />
            <PermissionItem text="Analytics" />
            <PermissionItem text="Media" />
            <PermissionItem text="View" />
            <PermissionItem text="Analytics" />
        </div>
      </div>

      <hr className="border-gray-800" />

      {/* Users Directory Section */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Users directory</h2>
        <div className="space-y-1 mb-6">
            <PermissionItem text="Manage users" />
            <PermissionItem text="Media" />
            <PermissionItem text="View" />
            <PermissionItem text="Analytics" />
        </div>
        <div className="flex justify-between space-x-3 mt-6">
            <button className="flex-1 py-2 rounded-lg border border-gray-700 text-sm hover:bg-gray-800 transition-colors">
                Change role
            </button>
            <button className="flex-1 py-2 rounded-lg bg-green-600 text-sm hover:bg-green-700 font-bold transition-colors">
                Change role
            </button>
        </div>
      </div>
    </div>
);

// --------------------------------------------------
// C. Composant Principal (Createurs)
// --------------------------------------------------
const Createurs: React.FC = () => {
  return (
    // Responsive Layout: Colum-first, then Row-first on large screens
    <div className="flex flex-col lg:flex-row flex-1 min-h-screen bg-gray-900 text-white">
      
      {/* Contenu principal: Détails des revenus et Graphique */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <h1 className="text-xl font-semibold mb-6">Detail de revenus</h1>

        {/* Top Revenue Cards (Abonnements, Medias push, Tips) */}
        {/* Mobile: 1 colonne / Tablette: 2 colonnes / Desktop: 3 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <MetricCard title="Abonnements" amount="1478.98 $" subtitle="Medias Privés" />
          <MetricCard title="Medias push" amount="1478.98 $" subtitle="Lives" />
          <MetricCard title="Tips" amount="1478.98 $" subtitle="Affiliés" />
        </div>

        {/* Employee Cards (Employés permanents) */}
        {/* Mobile: 1 colonne / Tablette: 2 colonnes / Grand Desktop: 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <MetricCard title="Employe permanent" amount="1,300" subtitle="Medias Privés" type="permanent" />
          <MetricCard title="Employe permanent" amount="1,300" subtitle="Medias Privés" type="permanent" />
          <MetricCard title="Employe permanent" amount="1,300" subtitle="Medias Privés" type="permanent" />
          <MetricCard title="Employe permanent" amount="1,300" subtitle="Medias Privés" type="permanent" />
        </div>

        {/* Revenue Graph Section */}
        <div className="bg-gray-800 p-4 rounded-xl mt-6 h-auto min-h-80">
            <p className="text-lg font-semibold mb-4 text-gray-200">Revenus mensuels</p>
            <div className="h-64 sm:h-80 flex items-center justify-center border border-dashed border-gray-700 rounded-lg">
                <span className="text-gray-500">
                    [Intégration du composant de graphique ici, avec labels responsive]
                </span>
            </div>
        </div>
      </main>

      {/* Panneau de Droite (Role & permission) */}
      <RightPanel />

    </div>
  );
};

export default Createurs;