import React, { FC } from 'react';
import phylloxera from '../../assets/phylloxera.jpg';
import avenues from '../../assets/voieries.png';

const Urbanisation: FC = () => {
  return (
    <div id="urbanisation" className="">
      <div className="flex-1 self-center pb-8">
        <h1 className="text-3xl text-left text-gray-900">Urbanisation</h1>
        <div className="lg:flex lg:flex-wrap justify-between">
          <p className="flex-1 indent-5 text-lg text-justify pt-4 lg:pr-10">
            {`Jusqu’à présent nos recherches étaient centrées sur l’urbanisation comme 
          moteur des transformations du paysage viticole. Cependant, un entretien avec 
          Conrad Briguet, le Directeur de la haute école de viticulture du canton de vaud, 
          nous a révélé une toute autre vérité. Ce ne serait pas l’Homme mais un insecte 
          qui aurait propulsé cette métamorphose. Le phylloxera arrive en Suisse en 1874 et 
          se propage très rapidement jusqu’au vignoble lausannois, malgré les nombreuses 
          tentatives de lutte mises en place. En plus des ravages du phylloxéra s'ajoutent deux maladies, 
          le mildiou et l’oïdium, provoquées par des champignons arrivés d’Amérique. La culture des vignes 
          devient compliquée, les récoltes sont compromises et les traitements nécessaires pour 
          protéger et reconstituer ces vignes sont très coûteux. Si une partie des propriétaires 
          parvient à reconvertir leurs cultures de vins en prairies et champs, la majorité se 
          voient contraint de vendre leurs parcelles.`}
          </p>
          <div className="pt-4 pl-4 text-left lg:text-center lg:w-1/6">
            <img id="phyllo" src={phylloxera} alt="" className="w-[179px] h-[308px]" />
            <label htmlFor="phyllo">Phylloxera vastatrix. BIU Santé Paris.</label>
          </div>
        </div>

        <div className="lg:flex lg:flex-wrap">
          <p className="indent-5 text-lg text-justify py-4 lg:pr-10">
            {`Or au même moment, Lausanne connaît une explosion démographique, entre 1884 et 1910 
            sa population se voit quasiment doublé (de 33 340 à 64 446 habitants). L’enquête de 
            Schnetzler révèle, quant-à-elle, l’insalubrité de la ville. Il y a un besoin imminent de 
            désengorger le centre de Lausanne. L’urbanisation au sud et à l’est de la gare commence alors 
            réellement, et ce au dépens des vignes, qui représentent, par leur emplacement avec leur 
            vue dégagée sur le Léman mais aussi leur ensoleillement, des parcelles idéales. Avec un modèle 
            quasi Haussmannien, de grandes percées rectilignes, telles l’Avenue Fréderic-César-de-la-Harpe, 
            sont réalisées pour relier la vieille ville à la gare, jusqu’à Ouchy.`}
          </p>
          <div className="flex-1 py-4 text-left lg:text-center">
            <img id="avenues" src={avenues} alt="" className="flex-1" />
            <label htmlFor="avenues"></label>
          </div>
        </div>

        <div className="lg:flex lg:flex-wrap">
          <p className="indent-5 text-lg text-justify py-4 lg:pr-10">
            {`Ces avenues sont bordées par de nouvelles constructions qui, à l’image de Paris, utilisent 
            l’îlot comme matrice de construction. Un exemple type serait le quartier Georgette, où le 
            bâti devient une interface entre la ville et les cours intérieurs.`}
          </p>
          <div className="flex-1 py-4 text-left lg:text-center"></div>
        </div>

        <div className="lg:flex lg:flex-wrap">
          <p className="indent-5 text-lg text-justify py-4 lg:pr-10">
            {`Finalement, la ville se détache de ce mouvement au début du 20ème siècle, pour adopter 
            un principe typologique en adéquation parfaite avec sa géographie. Les “plots” de Lausanne 
            émergent, notamment autour de l’Avenu Juste Olivier. Ces villas autonomes, tout comme l’îlot, 
            offrent un filtre entre la rue et les jardins. L’avantage de ce modèle ne se révèle réellement 
            que lorsque l’on observe l’espace créé par le négatif des bâtiments. En effet, les intersections 
            entre chaque plot dévoile une multitude de vues croisées sur le lac et les montagnes. Ainsi, 
            malgré la disparition des vignes, la ville parvient à retrouver son caractère bucolique. `}
          </p>
          <div className="flex-1 py-4 text-left lg:text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Urbanisation;
