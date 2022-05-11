import React, { FC } from 'react';

const Source: FC = () => {
  return (
    <div id="source" className="block md:flex md:flex-wrap mt-10 pt-10">
      <div className="flex-1 md:pr-14 self-center pb-8">
        <h1 className="text-4xl text-left text-gray-900">Sources</h1>
        <ul className="text-lg text-left py-4 px-10 list-decimal">
          <li>Cadastre de Berney, 1831</li>
          <li>
            <a
              target="#"
              href="https://scriptorium.bcu-lausanne.ch/zoom/171722/view?page=37&p=separate&tool=info&view=0,0,1079,1943"
            >
              <span className="italic hover:text-blue-600">Almanach pour le commerce et l&apos;industrie</span> , 1832
            </a>
          </li>
          <li>
            <a
              target="#"
              href="https://scriptorium.bcu-lausanne.ch/zoom/170200/view?page=2&p=separate&search=indicateur&tool=search&view=0,0,1600,2570"
            >
              <span className="italic hover:text-blue-600">Indicateur Vaudois</span> , 1895
            </a>
          </li>
          <li>TODO ajouter les sources des autres cartes Carte Siegfried Carte geovite.ethz</li>
          <li>
            <a
              target="#"
              href="https://www.vd.ch/themes/etat-droit-finances/archives-cantonales/archives-du-registre-foncier/"
            >
              <span className="hover:text-blue-600">Registre foncier des archives cantonales vaudoises</span>
            </a>
          </li>
          <li>
            <a target="#" href="https://ekds.ch/library/book:051">
              <span className="italic hover:text-blue-600">
                Les monuments d&apos;art et d&apos;histoire du canton de vaud Tome 1: La ville de Lausanne.
                Introduction, extension urbaine, ponts, fontaines, édifices religieux (sans la cathédrale),
                hospitaliers, édifices publics
              </span>
              , Marcel Grandjean, edition Bâle 1965
            </a>
          </li>
          <li>
            <a target="#" href="https://ekds.ch/library/book:071">
              <span className="italic hover:text-blue-600">
                Les monuments d&apos;art et d&apos;histoire du canton de vaud Tome 4: Lausanne. Villages, hameaux et
                maisons de l&apos;ancienne campagne lausannoise
              </span>
              , Marcel Grandjean, 1981
            </a>
          </li>
          <li>
            <a target="#" href="https://www.persee.fr/doc/rgest_0035-3213_1962_num_2_4_1802">
              <span className="italic hover:text-blue-600">La vigne et le vin en Suisse. </span>
              Daillens Françoise. In: Revue Géographique de l&apos;Est, tome 2, n°4, Octobre-décembre 1962. pp. 345-374
            </a>
          </li>
          <li>
            <a target="#" href="https://www.persee.fr/doc/rga_0035-1121_1922_num_10_4_1738">
              <span className="italic hover:text-blue-600">
                La vigne en Suisse. Le vignoble de la dépression subjurassienne.{' '}
              </span>
              Peyre Marius. In: Revue de géographie alpine, tome 10, n°4, 1922. pp. 495-548
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Source;
