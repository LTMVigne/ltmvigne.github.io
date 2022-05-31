import React, { FC } from 'react';
import mercier from '../../assets/mercier.png';
import milan from '../../assets/milan.png';
import valency from '../../assets/valency.png';

const Preservation: FC = () => {
  return (
    <div id="preservation" className="block md:flex md:flex-wrap mt-10 pt-10">
      <div className="flex-1 self-center pb-8">
        <h1 className="text-3xl text-left text-gray-900">Espaces verts</h1>

        <p className="indent-5 text-lg text-justify py-4">
          {`Dès le début du 20ème siècle, la ville de Lausanne se transforme. Lors de cette transformation, diverses
          places encore “vertes”, des vignes notamment, sont prisées pour la place qu’elles offrent et leur
          ensoleillement. La mode des grands parcs bat son plein dans les grandes villes européennes, ce qui pousse la
          ville de Lausanne à acheter ces terrains pour en faire des parcs: Le parc de Milan. Les habitants ne sont pas
          en reste non plus, la promenade Mercier voit le jour suite à une pétition contre un projet immobilier. La
          pétition demande que la parcelle en question reste naturelle et soit aménagée en ce sens. Le parc de Valency
          lui aussi voit le jour suite à une pétition, celle-ci demande à la ville de racheter le terrain à une famille
          bourgeoise dans le but d’en faire un parc pour le grand public.`}
        </p>

        <h2 className="text-xl text-left text-gray-900">Parc de Milan et colline de Montriond</h2>

        <div className="flex justify-center ">
          <img id="milan" src={milan} alt="" className="w-[549px] h-[416px]" />
        </div>

        <p className="indent-5 text-lg text-justify py-4">
          {`Dès 1832, la colline de Montriond est en grande partie recouverte de vignes. En 1894, la construction d’une
          route est envisagée à travers l’actuel parc de Milan (en contrebas de la colline), c’est à cette occasion que
          la ville de Lausanne achète la parcelle dans le but de sauvegarder le terrain. La colline est par la suite
          assortie de divers aménagements, ainsi que du jardin botanique.`}
        </p>

        <h2 className="text-xl text-left text-gray-900">Parc de Valency</h2>

        <div className="flex justify-center ">
          <img id="milan" src={valency} alt="" className="w-[500px] h-[406px]" />
        </div>

        <p className="indent-5 text-lg text-justify py-4">
          {`Le parc de Valency fut également l’emplacement de nombreuses vignes. Les habitants de Lausanne signent en 1906
          une pétition pour le rachat des parcelles et leur transformation en espace de promenade. La ville achètera
          finalement le lopin de terre en 1931. Divers travaux ont lieu durant tout le 20ème siècle pour en faire le
          parc d’aujourd’hui.`}
        </p>

        <h2 className="text-xl text-left text-gray-900">Promenade Mercier</h2>
        <div className="flex justify-center ">
          <img id="milan" src={mercier} alt="" className="w-[616px] h-[396px]" />
        </div>
        <p className="indent-5 text-lg text-justify py-4">
          {`Comme dans les cas précédents, la parcelle où aujourd'hui est construite la promenade Mercier était recouverte
          de vignes en 1889. En 1889, les riverains s’opposent à la construction de nouvelle habitations. La zone est
          alors déjà réputée pour sa belle vue. Les habitants usent d’une pétition pour faire valoir l’importance du
          lieu. En 1910 la ville finit les travaux et la promenade Mercier voit le jour. C’est grâce à un don de
          Jean-Jacques Mercier fils en 1903 que la commune a pu entreprendre de tels travaux. Ce dernier demanda que la
          place soit nommée selon le nom de son père en hommage.`}
        </p>
      </div>
    </div>
  );
};

export default Preservation;

// 1001 813
