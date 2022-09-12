import React, { FC } from 'react';
import profession from '../assets/professions.jpg';

const Vin: FC = () => {
  return (
    <div id="vin" className="block md:flex md:flex-wrap mt-10">
      <div className="flex-1 self-center">
        <h1 className="text-4xl text-left text-gray-900">Consommation de vin à Lausanne</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Nous avons vu que la surface viticole lausannoise diminue 
          dramatiquement au cours du XIXème siècle. On pourrait ainsi 
          légitimement penser qu’une baisse de production locale s’accompagne 
          d’une diminution de la consommation de vin au profit d’autres types 
          de breuvages alcoolisés. Pour étudier cette hypothèse, nous nous sommes 
          penchés sur des données extraites à partir de l’Almanach pour le 
          commerce et l’industrie de 1832, ainsi que des indicateurs vaudois 
          de 1880, 1881 et 1886, 1895 et 1898.`}
        </p>

        <div className="flex justify-center py-4">
          <img src={profession} alt="" className="w-[985px]" />
        </div>

        <p className="indent-5 text-lg text-justify py-4">
          {`Les données ci-dessus mettent en évidence plusieurs informations:`}
        </p>

        <ul className="text-justify text-lg list-disc ml-20">
          <li>{`le nombre de commerçants pour l’ensemble de ces types d’industries, 
          hormis les tonneliers, s’est multiplié. Ceci est dû à l’explosion 
          démographique que connaît Lausanne au cours du XIXème siècle.`}</li>
          <li>{`il est intéressant de se pencher sur l’analyse du nombre de 
          tonneliers puisqu’un nombre important des tonneaux fabriqués pourrait 
          être utilisé pour stocker le vin produit localement. On observe ici 
          que le nombre de tonneliers reste plus ou moins constant entre le début 
          et la fin du XIXème siècle, tandis que la demande en boissons alcoolisées, 
          illustrée par le nombre de marchands de vins et le nombre de cafés, 
          s’accroît. Ainsi, le fait que le nombre de tonneliers n’augmente pas 
          laisse à supposer que les produits vendus par les marchands sont 
          majoritairement importés depuis l’étranger.`}</li>
          <li>{`le nombre de cafés explose: ces derniers proposent notamment 
          des vins, des bières et des spiritueux`}</li>
          <li>
            {`la bière ne semble pas faire particulièrement beaucoup de 
            concurrence au vin si l’on se repose uniquement sur la comparaison 
            du nombre de brasseries et de marchands de vins.`}
          </li>
        </ul>

        <p className="indent-5 text-lg text-justify py-4">
          {`En somme, ce graphique traduit une hausse générale de la consommation 
          d’alcool. Ce dernier devient un produit de consommation courant avec 
          l’amélioration des techniques de distillation et le développement du 
          réseau de chemin de fer. Ce sont particulièrement les populations 
          défavorisées des milieux ruraux et la classe ouvrière qui s’y réfugient, 
          pour supporter les conditions de travail et de vie difficiles, telles 
          que l’insalubrité de la ville, causées par l’industrialisation. Les 
          comportements violents dus à l’alcool se multiplient et les mouvements 
          de tempérance et d’abstinence émergent en réponse pour tenter de freiner 
          cette consommation. La demande de vin est accrue tandis que les vignes 
          lausannoises disparaissent. Pour y répondre, les vins sont donc importés 
          depuis l’étranger par voie ferrée, et leurs prix faibles, font vite 
          concurrence à la culture viticole locale restante, chère et peu 
          rémunératrice.`}
        </p>
      </div>
    </div>
  );
};

export default Vin;
