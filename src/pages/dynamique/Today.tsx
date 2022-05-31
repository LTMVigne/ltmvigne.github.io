import React, { FC } from 'react';
import languedoc from '../../assets/languedoc.png';

const Today: FC = () => {
  return (
    <div id="processus" className="block md:flex md:flex-wrap mt-10 pt-10">
      <div className="flex-1 self-center pb-8">
        <h1 className="text-3xl text-left text-gray-900">La dernière vigne du sud lausannois - colline du Languedoc</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Il s’agit de la dernière vigne intra muros de la ville de Lausanne, qui on le rappelle, est le plus grand propriétaire foncier public viticole de Suisse. Cette vigne est utilisée à des fins pédagogiques pour les écoles environnantes. Deux employés communaux s’en occupent tout au long de l’année et les récoltes sont ensuite redistribuées aux élèves. La vigne s'étend sur 1000 m2 avec quelques 600 pieds de vignes produisant 800 kg de raisin par année de 14 variétés différentes. Les vignes furent arrachée en 1930, mais replantée en 1987à titre didactique et symbolique par la ville qui a acquis le terrain en 1982`}
        </p>
        <div className="flex justify-center ">
          <img id="milan" src={languedoc} alt="" className="w-[518px] h-[395px]" />
        </div>
      </div>
    </div>
  );
};

export default Today;
