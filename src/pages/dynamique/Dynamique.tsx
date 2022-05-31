import React, { FC } from 'react';

const Dynamique: FC = () => {
  return (
    <div id="dynamique" className="block md:flex md:flex-wrap mt-10">
      <div className="flex-1 self-center pb-8">
        <h1 className="text-4xl text-left text-gray-900">Dynamiques de changement</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Les potentiels dynamiques, mise à jour par nos soins et explicitées de façon plus conséquente ci-dessous, sont
          basées sur les événements intervenus pendant les intervalles de temps entre chaque carte : La construction de
          la gare et l’arrivée du tourisme; l’apparition d’un parasite, le phylloxera, et la crise du logement;
          finalement, le besoin d’espace vert publique en zone urbaine.`}
        </p>
      </div>
    </div>
  );
};

export default Dynamique;
