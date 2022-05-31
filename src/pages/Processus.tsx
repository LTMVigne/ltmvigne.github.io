import React, { FC } from 'react';

const Processus: FC = () => {
  return (
    <div id="processus" className="block md:flex md:flex-wrap mt-10 pt-10">
      <div className="flex-1 self-center">
        <h1 className="text-4xl text-left text-gray-900">Processus</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Notre point de départ était le cadastre be Berney de 1832. Nous avons 
          donc comparé une version vectorisée de ce dernier avec les cartes Siegfried 
          des années 1873, 1889 et 1926. Ces comparaisons nous ont permis de quantifier 
          et dater une partie de la disparition des vignes. Une fois les périodes de 
          disparition établies nous avons cherché à corréler ces dates avec d’autres 
          sources pour mieux comprendre ou confirmer/infirmer la disparition de ces vignes. 
          Nous avons donc étudié le registre des métiers et en particulier le nombre de marchands 
          de vin, de tonnelier, de marchands de bières, etc. Afin de remettre nos résultats en 
          perspectives nous avons également interviewé le Directeur de la haute école de 
          viticulture du canton de vaud, Conrad Briguet et Philippe Droz, spécialiste en vigne 
          chez Agridea. Finalement pour concrétiser nos idées nous avons étudié plusieurs cas 
          particulier qui sont détaillés plus bas. `}
        </p>
      </div>
    </div>
  );
};

export default Processus;
