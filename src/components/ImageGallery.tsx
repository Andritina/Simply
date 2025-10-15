import React, { useState } from 'react';
import ImageCard from '../pages/ImageCard';
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import type { ImageData } from '../types/ImageTypes';

const initialImages: ImageData[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#3B82F6' },
  { id: 2, url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#10B981' },
  { id: 3, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#F97316' },
  { id: 4, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#10B981' },
  { id: 5, url: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#3B82F6' },
  { id: 6, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#F97316' },
  { id: 7, url: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#10B981' },
  { id: 8, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', price: '2$', versionTag: 'Téléchargement Optimisé', versionColor: '#3B82F6' },
];

const ImageGallery: React.FC = () => {

  const [uploadMode, setUploadMode] = useState<'Auto' | 'Manuel'>('Auto');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const progression = 8; 

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      
      <Sidebar/>

      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
      <Navbar />


       
        <header className=" sm:p-2 pb-0">
          <h1 className="text-xl f mb-2">Téléchargement Optimisé</h1>
          
    
       <div className="h-2 ml-2 bg-gray-700 rounded-full mb-3 w-250">
        <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progression}%` }}
        ></div>
        </div>


          {/* Toggles d'optimisation */}
          <div className="flex items-center space-x-6 text-sm mb-6">
            {/* 🔹 Toggle Optimisation */}
            <label className="flex items-center cursor-pointer">
              <span className="mr-3 text-gray-300 ">Optimisation</span>
             
            </label>

            {/* 🔹 Toggle Mode Auto / Manuel */}
            <label className="flex items-center cursor-pointer">
              
              <div 
                className={`relative w-10 h-6 rounded-full transition-colors ${uploadMode === 'Auto' ? 'bg-blue-600' : 'bg-gray-600'}`}
                onClick={() => setUploadMode(uploadMode === 'Auto' ? 'Manuel' : 'Auto')}
              >
                <div 
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${uploadMode === 'Auto' ? 'translate-x-4' : 'translate-x-0'}`}
                ></div>
              </div>
              <span className="ml-3 text-gray-300">{uploadMode}</span>
            </label>
          </div>
        </header>
        {/* ---------- FIN HEADER ---------- */}

        {/* Zone de contenu */}
        <main className=" sm:p-2 flex flex-col lg:flex-row gap-8">
          
          {/* Section principale : grille d’images */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
            {initialImages.map((image) => (
              <ImageCard 
                key={image.id}
                imageUrl={image.url}
                price={image.price}
                versionTag={image.versionTag}
                versionColor={image.versionColor}
                onSelect={() => setSelectedImage(image.url)}
              />
            ))}
          </div>

          {/*  Panneau latéral droit */}
          <aside className="w-full lg:w-80 bg-gray-800 rounded-lg p-6 flex flex-col space-y-6 shadow-xl sticky self-start">

            {/* Image sélectionnée ou inconnue */}
            <div className="relative w-full h-48 sm:h-64 lg:h-56 rounded-lg overflow-hidden border-2 border-transparent hover:scale-103 transition duration-300">
              <img
                src={selectedImage || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}
                alt="Aperçu"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-lg text-[12px] transition duration-150 shadow-md">
                SEND
              </button>
            </div>

            {/* Options */}
            <div>
              <h2 className="text-sm text-gray-300 mb-1">Ajouter Personnalisé</h2>
              <input 
                type="text"
                placeholder="Ajouter tag personnalisé"
                className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-500 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <h2 className="text-sm text-gray-300 mb-1">Version</h2>
              <input 
                type="text"
                placeholder="Nom de version"
                className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-500 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <h2 className="text-sm text-gray-300 mb-1">Ligne</h2>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Nom de ligne"
                  className="w-full p-2 pr-16 bg-gray-700 rounded text-white placeholder-gray-500 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button className="absolute right-1 top-1 h-8 bg-gray-600 hover:bg-gray-500 text-white text-xs px-3 rounded-md transition duration-150">
                  Ligne 
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default ImageGallery;
