import React from 'react';
import { FaUpload, FaClock, FaPlayCircle } from 'react-icons/fa';
import Card from './Card';

const MediaPlanning: React.FC = () => (
  <Card
    title="Planification & Médias Récents"
    className="md:col-span-1 m-4 border border-gray-700/60 bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-md shadow-lg rounded-2xl"
  >
    <div className="space-y-5">
      {/* --- Section Tutoriel --- */}
      <div className="border-b border-gray-700/70 pb-4 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-white flex items-center gap-2">
            <FaPlayCircle className="text-accent-blue w-5 h-5" />
            Tutoriel Vidéo : <span className="text-accent-blue">Les Bases</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">Article : S.Clé — <span className="text-success-green">Succès</span></p>
        </div>
        <span className="bg-success-green/20 text-success-green text-xs font-semibold px-3 py-1 rounded-full shadow-md shadow-success-green/20">
          ✅ Prêt
        </span>
      </div>

      {/* --- Section Médias récents --- */}
      <div className="space-y-4">
        {/* Fichier image */}
        <div className="group flex items-center space-x-4 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/60 hover:shadow-md hover:shadow-accent-blue/10">
          <div className="p-2 bg-accent-blue/10 rounded-full">
            <FaUpload className="w-5 h-5 text-accent-blue group-hover:scale-110 transition-transform duration-200" />
          </div>
          <div>
            <p className="text-sm text-white font-medium">Image_Promo_Noel.jpg</p>
            <p className="text-xs text-gray-400">Il y a 20h</p>
          </div>
        </div>

        {/* Fichier vidéo */}
        <div className="group flex items-center space-x-4 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800/60 hover:shadow-md hover:shadow-warning-yellow/10">
          <div className="p-2 bg-warning-yellow/10 rounded-full">
            <FaClock className="w-5 h-5 text-warning-yellow group-hover:rotate-12 transition-transform duration-200" />
          </div>
          <div>
            <p className="text-sm text-white font-medium">Intro_NouveauxAbonnes.mp4</p>
            <p className="text-xs text-warning-yellow">⏳ Compression en cours</p>
          </div>
        </div>
      </div>
    </div>

    {/* --- Lien bas --- */}
    <a
      href="#"
      className="block text-center text-sm mt-6 text-accent-blue/80 hover:text-accent-blue hover:underline transition"
    >
      Accéder à la Gestion de Contenu
    </a>
  </Card>
);

export default MediaPlanning;
