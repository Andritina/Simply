import React from 'react';
import type { Contenu } from '../types/types';

interface CarteContenuProps {
  contenu: Contenu;
}

const getClassesEtiquette = (titre: Contenu['titre']) => {
  switch (titre) {
    case 'Acheté': return 'bg-green-500 text-white';
    case 'En attente': return 'bg-blue-500 text-white';
    case 'Refusé': return 'bg-red-500 text-white';
    case 'Gratuit': return 'bg-white text-black';
    case 'Public': return 'bg-purple-500 bg-opacity-70 text-white';
    default: return 'bg-gray-500 text-white';
  }
}

export const CarteContenu: React.FC<CarteContenuProps> = ({ contenu }) => {
  return (
    <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg group bg-gray-700">
      {/* Image de fond */}
      <img
        src={contenu.urlImage}
        alt={contenu.titre}
        className="w-full h-full object-cover"
      />

      {/* Étiquette de statut */}
      <div
        className={`absolute top-3 right-3 text-xs sm:text-sm px-3 py-1 rounded-full ${getClassesEtiquette(contenu.titre)}`}
      >
        {contenu.titre}
      </div>

      {/* Indicateur de prix */}
      <div className="absolute bottom-3 right-3 text-white bg-gray-600 bg-opacity-70 font-bold text-sm sm:text-lg px-2 py-1 rounded">
        {contenu.prix}$
      </div>
    </div>
  );
};