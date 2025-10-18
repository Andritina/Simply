import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Card from './Card';

const messages = [
  { id: 1, user: 'Sarah D.', status: 'VIP', time: 'il y a 2h', content: 'Question sur l\'accès' },
  { id: 2, user: 'Problème paiement', status: 'Urgent', time: 'il y a 1h', content: 'Brouillon' },
  { id: 3, user: 'Kevin M.', status: 'Normal', time: 'il y a 4h', content: 'Suivi de dossier' },
];

const UrgentMessaging: React.FC = () => (
  <Card
    title="Messagerie Urgente"
    className="md:col-span-2 m-4 bg-gradient-to-br from-gray-900/70 to-gray-800/60 border border-gray-700/60 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden"
  >
    {/* --- FILTRES --- */}
    <div className="flex justify-between mb-5">
      <div className="flex gap-3">
        {['Non lus', 'VIP', 'Urgents'].map(filter => (
          <button
            key={filter}
            className={`text-sm px-4 py-1.5 rounded-full font-semibold transition-all duration-300 
            ${
              filter === 'VIP'
                ? 'bg-danger-red text-white shadow-md shadow-danger-red/40 hover:scale-105'
                : filter === 'Urgents'
                ? 'bg-warning-yellow/20 text-warning-yellow hover:bg-warning-yellow/30 hover:scale-105'
                : 'bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 hover:scale-105'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <button className="text-xs text-gray-400 hover:text-accent-blue transition">
        Voir tout
      </button>
    </div>

    {/* --- LISTE DES MESSAGES --- */}
    <div className="space-y-4">
      {messages.map(msg => (
        <div
          key={msg.id}
          className="group flex justify-between items-center p-4 rounded-xl border border-gray-700/50 
                     bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300
                     shadow-md hover:shadow-accent-blue/20 hover:-translate-y-1"
        >
          {/* --- Profil + contenu --- */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <FaUserCircle className="text-accent-blue w-10 h-10 opacity-90 group-hover:opacity-100 transition" />
              {msg.status === 'VIP' && (
                <span className="absolute -top-1 -right-1 bg-danger-red w-3 h-3 rounded-full border-2 border-gray-900 animate-pulse"></span>
              )}
            </div>

            <div>
              <p className="font-semibold text-white text-sm">{msg.user}</p>
              <p className="text-xs text-gray-400">{msg.content}</p>
            </div>
          </div>

          {/* --- Détails + actions --- */}
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full tracking-wide
                ${
                  msg.status === 'VIP'
                    ? 'bg-danger-red/80 text-white'
                    : msg.status === 'Urgent'
                    ? 'bg-warning-yellow/70 text-gray-900'
                    : 'bg-gray-700 text-gray-300'
                }`}
            >
              {msg.status}
            </span>

            <span className="text-xs text-gray-400">{msg.time}</span>

            <button
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300
                ${
                  msg.content === 'Brouillon'
                    ? 'bg-accent-blue text-white hover:bg-accent-blue/80 hover:scale-105 shadow-md shadow-accent-blue/30'
                    : 'bg-success-green/20 text-success-green hover:bg-success-green/40 hover:scale-105 shadow-md shadow-success-green/30'
                }`}
            >
              {msg.content === 'Brouillon' ? 'Éditer par Jean' : 'Répondre'}
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* --- LIEN PIED --- */}
    <a
      href="#"
      className="block text-center text-sm mt-6 text-accent-blue/80 hover:text-accent-blue hover:underline transition"
    >
      Voir toute la messagerie unifiée
    </a>
  </Card>
);

export default UrgentMessaging;
