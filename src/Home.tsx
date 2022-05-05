import React, { FC } from 'react';
import background from './assets/commune_lausanne.png';

const Home: FC = () => {
  return (
    <div className="mx-auto h-screen">
      <article
        className="h-full [background-repeat:_no-repeat] [background-position:_center] [background-size:_cover]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex h-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mt-16">
            <h1 className="text-left text-7xl font-bold py-4 text-gray-900">Lausanne Time Machine</h1>
            <h1 className="text-left text-4xl text-gray-900">Groupe Cadastre</h1>
          </div>
        </div>
      </article>
      <p className="py-2">
        {`Chromolithographie d'Alfred Guesdon pour La Suisse à vol d'oiseau, série publiée à Paris vers 1858 (Musée
        historique de Lausanne).`}
      </p>
    </div>
  );
};

export default Home;
