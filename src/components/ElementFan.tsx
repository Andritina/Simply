// src/components/ElementFan.tsx

import React from 'react';
import type { Fan } from '../types';

interface ElementFanProps {
 fan: Fan;
}

const getCouleurStatut = (statut: Fan['statut']) => {
    switch (statut) {
    case 'Spender': return 'bg-green-600 opacity-60';
    case 'Good buyer': return 'bg-yellow-500 opacity-60';
    case 'Timewaster': return 'bg-gray-500 opacity-60';
    default: return 'bg-gray-500 opacity-50';
  }
}

export const ElementFan: React.FC<ElementFanProps> = ({ fan }) => (
  <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-800 transition-colors border-b border-gray-700">
    <div className="flex items-center">
      {/* Avatar */}
      {fan.urlAvatar ? (
        <img
          src={fan.urlAvatar}
          alt={fan.nom}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
          {fan.initiale}
        </div>
      )}

      <div>
        <div className="text-white text-[14px] ">{fan.nom}</div>
        <div className="text-[12px] text-gray-400">{fan.derniereActivite}</div>
      </div>
    </div>

    {/* Étiquette de statut */}
    <div className="flex items-center">
      <div className={`text-xs px-2 py-1 rounded-full text-black ${getCouleurStatut(fan.statut)} text-center min-w-[90px]`}>
        {fan.statut}
      </div>
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);