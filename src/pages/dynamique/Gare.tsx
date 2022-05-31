import React, { FC } from 'react';
import beauRivage from '../../assets/gare.jpg';

const Tourisme: FC = () => {
  return (
    <div id="tourisme" className="block md:flex md:flex-wrap">
      <div className="flex-1 self-center pb-8">
        <h1 className="text-3xl text-left text-gray-900">{`L'arrivée de la gare`}</h1>
        <p className="indent-5 text-lg text-justify pt-4">
          {`L’inauguration de la Gare de Lausanne en 1856, en partie provoquée par la réalisation de la ligne Paris-Milan,
          créée une forte augmentation du tourisme. La gare devant être à proximité de la ville, devait nécessairement
          empiété sur un terrain vignoble. Une partie de l’économie agricole est donc convertie en économie de tourisme.
          Ceci se traduit notamment par la construction d’hôtels, restaurants, cafés etc. Suite à des mouvements
          similaires en France et en Italie les personnes les plus aisés s'installent dans des endroits propice à un bon
          ensoleillement. En effet, les années 1840 marquent une intensification de l'activité touristique avec le
          développement notable de la Riviera lémanique.`}
        </p>
        <div className="flex justify-center py-6">
            <img id="Beau Rivage" src={beauRivage} alt="" />
            <label htmlFor="Beau Rivage"></label>
        </div>
        <p className="indent-5 text-lg text-justify pb-4">
          {`Les conditions nécessaires à l’exploitation viticole notamment l’emplacement, et l’ensoleillement, font des
          vignes des parcelles idéales pour la construction d’hôtels. Afin de répondre à la demande de luxe générée par
          l'arrivée de la gare, l’Hôtel de Beau-Rivage est inauguré en 1861. Grâce aux cartes étudiées, nous constatons
          que ce dernier remplace quatre terrains vignobles. Cela illustre parfaitement la disparition de quelques
          vignes entre 1832 et 1873, cette dynamique continuera dans les années à venir.`}
        </p>
      </div>
    </div>
  );
};

export default Tourisme;
