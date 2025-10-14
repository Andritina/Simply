
import React from 'react';
import { ElementFan } from './ElementFan';
import type { Fan } from '../types';

interface BarreLateraleFansProps {
  fans: Fan[];
}

export const BarreLateraleFans: React.FC<BarreLateraleFansProps> = ({ fans }) => {
  return (
    <aside className="bg-gray-900 w-80 min-h-screen flex flex-col">
  
      <div className="p-4 border-b border-gray-700">
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Rechercher un fan" 
            className="w-full py-2 pl-4 pr-10 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400">
            
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </span>
        </div>
        <div className="text-center py-1">
            <span className="text-white font-semibold border-b-2 border-blue-500">
                 Tous ({fans.length})
            </span>
        </div>

      </div>

      {/* Liste des fans */}
      <div className="overflow-y-auto">
        {fans.map(fan => (
          <ElementFan key={fan.id} fan={fan} />
        ))}
      </div>
    </aside>
  );
};