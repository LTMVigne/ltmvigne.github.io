import React, { FC } from 'react';

const Source: FC = () => {
  return (
    <div id="source" className="block md:flex md:flex-wrap mt-10">
      <div className="md:pr-14 self-center">
        <h1 className="text-4xl text-left text-gray-900">Sources</h1>
        <ul className="text-lg text-left py-4 px-10 list-decimal">
          <li>Cadastre de Berney digitalisé, 1832</li>
          <li>
            <a
              target="#"
              href="https://map.geo.admin.ch/?topic=swisstopo&lang=fr&bgLayer=ch.swisstopo.pixelkarte-farbe&E=2538235.46&N=1151472.20&zoom=8.834331534959711&catalogNodes=1392,1396,1397&layers=ch.swisstopo.zeitreihen&layers_timestamp=18731231"
              className="italic hover:text-blue-600"
            >{`Atlas topographique de la Suisse 1:25’000 (carte Siegfried)`}</a>
            , {`swisstopo`}
          </li>
          <li>
            <a
              target="#"
              href="https://scriptorium.bcu-lausanne.ch/zoom/171722/view?page=37&p=separate&tool=info&view=0,0,1079,1943"
            >
              <span className="italic hover:text-blue-600 text-justify">
                Almanach pour le commerce et l&apos;industrie
              </span>{' '}
              , 1832
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
          <li>
            <a
              target="#"
              href="https://museris.lausanne.ch/"
              className="hover:text-blue-600"
            >{`Sources iconographiques`}</a>
            , {`Archives du Musée Historique de Lausanne`}
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
            </a>
            Daillens Françoise. In: Revue Géographique de l&apos;Est, tome 2, n°4, Octobre-décembre 1962. pp. 345-374
          </li>
          <li>
            <a target="#" href="https://www.persee.fr/doc/rga_0035-1121_1922_num_10_4_1738">
              <span className="italic hover:text-blue-600">
                La vigne en Suisse. Le vignoble de la dépression subjurassienne.{' '}
              </span>
            </a>
            Peyre Marius. In: Revue de géographie alpine, tome 10, n°4, 1922. pp. 495-548
          </li>
          <li>
            <a
              target="#"
              href="https://hls-dhs-dss.ch/fr/articles/007395/2017-05-30/"
              className="italic hover:text-blue-600"
            >
              Vaud, Dictionnaire historique de la Suisse DHS
            </a>
            , Gilbert Coutaz, 2017
          </li>
          <li>
            <a
              target="#"
              href="https://hls-dhs-dss.ch/fr/articles/002408/2009-04-02/"
              className="italic hover:text-blue-600"
            >
              Lausanne (commune), Dictionnaire historique de la Suisse DHS
            </a>
            , Gilbert Kaenel, Gilbert Coutaz, Anne Radeff, Frédéric Sardet, 2009
          </li>
          <li>
            <a
              target="#"
              href="https://www.espazium.ch/fr/actualites/plot-atlas-dune-particularite-lausannoise"
              className="italic hover:text-blue-600"
            >{`PLOT – At­las d’une par­ti­cu­la­rité lau­san­noise`}</a>
            , Marc Frochaux, 2019
          </li>
          <li>
            <a
              target="#"
              href="https://www.lausanne.ch/vie-pratique/nature/parc-promenades/parcs-de-detente/place-milan-cret-monriond.html"
              className="italic hover:text-blue-600"
            >{`Place de Milan, crêt de Monriond: un parc aux mille usages`}</a>
            , {`Bureau de la communication-Web & multimédia`}, 2018
          </li>
          <li>
            <a
              target="#"
              href="https://www.letemps.ch/suisse/parc-milan-un-panorama-cosmopolite"
              className="italic hover:text-blue-600"
            >{`Parc de Milan: un panorama cosmopolite`}</a>
            , {`Marco D.`}, 2014
          </li>
          <li>
            <a
              target="#"
              href="https://www.lausanne.ch/vie-pratique/nature/parc-promenades/parcs-de-detente/parc-de-valency.html"
              className="italic hover:text-blue-600"
            >{`Parc de Valency: un élégant îlot de résistance verte`}</a>
            , {`Bureau de la communication-Web & multimédia`}, 2018
          </li>
          <li>
            <a
              target="#"
              href="https://fr.wikipedia.org/wiki/Parc_de_Valency"
              className="italic hover:text-blue-600"
            >{`Parc de Valency`}</a>
            , {`Wikipedia`}, 2022
          </li>
          <li>
            <a
              target="#"
              href="https://www.lausanne.ch/vie-pratique/nature/parc-promenades/places-promenades-esplanades/promenade-mercier.html"
              className="italic hover:text-blue-600"
            >{`Promenade Jean-Jacques Mercier: un arboretum à Lausanne`}</a>
            , {`Bureau de la communication-Web & multimédia`}, 2018
          </li>
          <li>
            <a
              target="#"
              href="https://www.24heures.ch/vivre/colline-languedoc-vignoble-plein-lausanne/story/16039104"
              className="italic hover:text-blue-600"
            >{`Colline du Languedoc: un vignoble en plein Lausanne`}</a>
            , {`Marie Nicollier`}, 2016
          </li>
          <li>
            <a
              target="#"
              href="https://partir-magazine.com/index.php?file=Articles&op=display&id=429"
              className="italic hover:text-blue-600"
            >{`Le vignoble urbain de Lausanne. Saveurs et quiétude`}</a>
            , {`Claude-Yves Reymond`}, 2013
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Source;
