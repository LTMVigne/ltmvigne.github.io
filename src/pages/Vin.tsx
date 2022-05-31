import React, { FC } from 'react';

const Vin: FC = () => {
  return (
    <div id="vin" className="block md:flex md:flex-wrap mt-10">
      <div className="flex-1 self-center">
        <h1 className="text-4xl text-left text-gray-900">Consommation de vin à Lausanne</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Nous avons vu que la surface viticole lausannoise diminue dramatiquement au cours du XIXème siècle. On
          pourrait ainsi légitimement penser qu’une baisse de production locale s’accompagne d’une diminution de la
          consommation de vin, or ce n’est pas ce qui se passe. En étudiant l’Almanach pour le commerce et l’industrie
          de 1832, ainsi que les indicateurs vaudois de 1880, 1886 et 1898, on observe les faits suivants:`}
        </p>
        <ul className="text-left text-lg list-disc ml-20">
          <li>{`le nombre de marchands de vin est de 4 en 1832 et augmente jusqu’à 74 en 1898`}</li>
          <li>{`le nombre de brasseries passe de 1 à 13 entre 1832 et 1898`}</li>
          <li>{`le nombre de cafés explose: ces derniers proposent notamment des vins, des bières et des spiritueux`}</li>
          <li>
            {`le nombre de tonneliers ne varie pas comparé à la population croissante: il y en a 16 en 1880, 22 en 1886 et
            13 en 1898. Le fait que ce nombre n’augmente pas laisse à supposer que les produits vendus par les marchands
            sont majoritairement importés depuis l’étranger.`}
          </li>
        </ul>

        <p className="indent-5 text-lg text-justify py-4">
          {`L’augmentation, à la fois de la consommation de vin mais aussi de bière, traduit une hausse générale de la
          consommation d’alcool. L’amélioration des techniques de distillation et le développement du réseau de chemin
          de fer permettent à l’alcool de devenir un produit de consommation courant. Les populations défavorisées des
          milieux ruraux et la classe ouvrière s’y réfugient pour supporter les conditions de travail et de vie
          difficiles, telles que l’insalubrité de la ville, causées par l’industrialisation. Les comportements violents
          dus à l’alcool se multiplient et les mouvements de tempérance et d’abstinence émergent en réponse pour tenter
          de freiner la consommation. La demande de vin est accru tandis que les vignes lausannoises disparaissent.
          Facilité par la voie ferrée, les vins sont donc importés depuis l’étranger et leur faible prix fait vite
          concurrence à la culture viticole locale restante, cher et peu rémunératrice.`}
        </p>
      </div>
    </div>
  );
};

export default Vin;
