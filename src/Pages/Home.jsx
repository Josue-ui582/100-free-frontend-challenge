import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          J'ai osé sortir de ma zone de confort
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Bienvenue dans un voyage transformateur où chaque jour est une opportunité pour moi de surpasser mes limites. Explorez mes défis quotidiens et découvrez de quoi 
          je suis vraiment capable. Chaque pas, aussi petit soit-il, me rapproche 
          d'une meilleure version de moi-même.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transform hover:scale-105 transition-all" onClick={() => navigate('/challenges')}>
          Découvrez tous mes défis
        </button>
      </div>
    </div>
  );
}

export default Home;