import React from 'react';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { BarreLateraleFans } from '../components/BarreLateraleFans';
import { CarteContenu } from '../components/CarteContenu';
import type { Fan, Contenu } from '../types/types';

const FANS_SIMULES: Fan[] = [
  { id: '1', nom: 'Cooper', initiale: 'C', derniereActivite: 'Il y a 1 jour', statut: 'Spender', urlAvatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  { id: '2', nom: 'Alfredo', initiale: 'A', derniereActivite: 'Il y a 4 jours', statut: 'Timewaster', urlAvatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { id: '3', nom: 'Emerson', initiale: 'E', derniereActivite: 'Il y a 12 jours', statut: 'Good buyer', urlAvatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: '4', nom: 'Beatrice', initiale: 'B', derniereActivite: 'Il y a 2 jours', statut: 'Spender', urlAvatar: 'https://randomuser.me/api/portraits/women/27.jpg' },
  { id: '5', nom: 'Luisa', initiale: 'L', derniereActivite: 'Il y a 2 jours', statut: 'Spender', urlAvatar: 'https://randomuser.me/api/portraits/women/28.jpg' },
];

const TITRES_SIMULES: Contenu['titre'][] = ['Gratuit', 'Acheté', 'En attente', 'Refusé', 'Public', 'Refusé'];
const PRIX_SIMULES: number[] = [0, 0, 0, 0, 5, 8];

const CONTENUS_SIMULES: Contenu[] = TITRES_SIMULES.map((titre, index) => {
  const fan = FANS_SIMULES[index % FANS_SIMULES.length];
  return {
    id: `c${index + 1}`,
    titre,
    prix: PRIX_SIMULES[index],
    urlImage: fan.urlAvatar ?? '',
  };
});

const MessagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 font-sans flex flex-col">
      {/* Navbar fixe en haut */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1 pt-[64px]"> {/* décalage du Navbar */}
        {/* Sidebar fixée à gauche */}
        <div className="fixed top-[64px] left-0 h-[calc(100vh-64px)] w-60 z-40 bg-gray-900 border-r border-gray-700">
          <Sidebar />
        </div>

        {/* Contenu principal (décalé à droite du Sidebar) */}
        <div className="flex flex-1 ml-60">
          {/* Barre latérale fans (collée à gauche du contenu) */}
          
          <div className="sticky top-[64px] h-[calc(100vh-64px)] z-30">
            <BarreLateraleFans fans={FANS_SIMULES} />
          </div>

          {/* Zone principale scrollable */}
          <main className="flex-1 p-8 overflow-y-auto">
            <h1 className="text-3xl font-light text-center text-white mb-6">Mes messages</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-40">
              {CONTENUS_SIMULES.map((contenu) => (
                <CarteContenu key={contenu.id} contenu={contenu} />
              ))}
            </div>  
          </main>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
