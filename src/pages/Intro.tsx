import React, { FC } from 'react';
import cadastre_1 from './../assets/DecoupeBerney_072.png';

const Intro: FC = () => {
  return (
    <div id="intro" className="block md:flex md:flex-wrap mt-10 pt-20">
      <div className="flex-1 md:pr-14 self-center pb-8">
        <h1 className="text-4xl text-left text-gray-900">Introduction</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Dans le cadre du cours Histoire Urbaine Digitale: Lausanne Time Machine, 
          nous avons décidé de nous pencher plus en détails sur le cas des vignes de Lausanne. 
          En effet, considéré comme un symbole sociologique et culturel du paysage lémanique, 
          la viticulture est l’un des principaux axes économiques de la région au XIXe siècle. 
          Les versants du Léman sont alors bordés par de nombreux vignobles. Or comme nous pouvons 
          l'observer aujourd’hui à Lausanne, entre le quartier du Flon et Ouchy, la vaste majorité 
          des vignes a disparu. Ainsi, en partant du Cadastre de Berney de 1832, nous avons tenté de 
          comprendre comment l’urbanisation de Lausanne au XIXe siècle a transformé le paysage viticole 
          du sud de la ville.`}
        </p>
      </div>
      <img src={cadastre_1} alt="" className="md:w-1/2 md:h-1/2 flex-1" />
    </div>
  );
};

export default Intro;
