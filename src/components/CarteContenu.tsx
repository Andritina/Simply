import React from 'react';
import type { Contenu } from '../types';

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
  const estEtiquetteSurImage = contenu.titre !== 'Public';

  return (
    <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg group">
      {/* Image de fond */}
      <img
        src={contenu.urlImage}
        alt={contenu.titre}
        className="w-full h-full object-cover"
      />

      {/* Voile sombre */}
      <div className="absolute inset-0 bg-opacity-20 pointer-events-none"></div>

      {/* Étiquette de statut */}
      <div
        className={`absolute text-sm  px-4 py-1 rounded-full ${getClassesEtiquette(contenu.titre)}
          ${estEtiquetteSurImage ? 'top-18 right-12' : 'top-18 right-12'}`}
      >
        {contenu.titre}
      </div>

      {/* Indicateur de prix */}
      <div className="absolute bottom-3 right-1 text-white bg-gray-600 font-bold text-lg bg-opacity-50 px-2 rounded">
        {contenu.prix}$
      </div>
    </div>
  );
};
