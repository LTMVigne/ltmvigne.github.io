import React, { FC, useEffect, useRef, useState } from 'react';
import { LayerGroup, MapContainer, TileLayer, GeoJSON, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import vignes_1832_json from './cartes/vignes_1832.json';
import vignes_1873_json from './cartes/vignes_1873.json';
import vignes_1873_a_json from './cartes/vignes_1873_apparues.json';
import vignes_1873_d_json from './cartes/vignes_1873_disparues.json';
import vignes_1889_json from './cartes/vignes_1889.json';
import vignes_1889_a_json from './cartes/vignes_1889_apparues.json';
import vignes_1889_d_json from './cartes/vignes_1889_disparues.json';
import vignes_1926_json from './cartes/vignes_1926.json';
import vignes_1926_d_json from './cartes/vignes_1926_disparues.json';
import vignes_2022_json from './cartes/vignes_2022.json';
import vignes_2022_d_json from './cartes/vignes_2022_disparues.json';

import { LatLngExpression } from 'leaflet';

const Cadastre: FC = () => {
  const center: LatLngExpression = [46.519653, 6.632273];

  const years = [1832, 1873, 1889, 1926, 2022];
  const titres = ['Cadastre de Berney', 'Carte Siegried', 'Carte Siegfried', 'Carte Siegfried', 'SwissTopo'];
  const [slider, setSlider] = useState(0);
  const [year, setYear] = useState(1832);
  const [title, setTitle] = useState('');
  const [showLayers, setShowLayers] = useState(true);

  // Geojson
  const vignes_1832 = JSON.parse(JSON.stringify(vignes_1832_json));
  const vignes_1873 = JSON.parse(JSON.stringify(vignes_1873_json));
  const vignes_1873_a = JSON.parse(JSON.stringify(vignes_1873_a_json));
  const vignes_1873_d = JSON.parse(JSON.stringify(vignes_1873_d_json));
  const vignes_1889 = JSON.parse(JSON.stringify(vignes_1889_json));
  const vignes_1889_a = JSON.parse(JSON.stringify(vignes_1889_a_json));
  const vignes_1889_d = JSON.parse(JSON.stringify(vignes_1889_d_json));
  const vignes_1926 = JSON.parse(JSON.stringify(vignes_1926_json));
  const vignes_1926_d = JSON.parse(JSON.stringify(vignes_1926_d_json));
  const vignes_2022 = JSON.parse(JSON.stringify(vignes_2022_json));
  const vignes_2022_d = JSON.parse(JSON.stringify(vignes_2022_d_json));

  // Overlays
  const berneyLayer = useRef();
  const siegfriedLayer1873 = useRef();
  const siegfriedLayer1889 = useRef();
  const siegfriedLayer1926 = useRef();
  const swissTopoLayer = useRef();

  // Styles
  const berney = '#0EA5E9';
  const siegfried1873 = '#1d53a3';
  const siegfried1889 = '#2b22d6';
  const siegfried1926 = '#8a46d4';
  const swisstopo2022 = '#d81ddb';
  const apparues = '#095228';
  const disparues = '#B91C1C';

  // Control if the base layers are shown
  const ShowBaseLayers = () => {
    const map = useMap();
    map.on('overlayadd', () => {
      setShowLayers(false);
    });
    map.on('overlayremove', () => {
      if (
        !map.hasLayer(berneyLayer.current) &&
        !map.hasLayer(siegfriedLayer1873.current) &&
        !map.hasLayer(siegfriedLayer1889.current) &&
        !map.hasLayer(siegfriedLayer1926.current) &&
        !map.hasLayer(swissTopoLayer.current)
      ) {
        setShowLayers(true);
      } else {
        setShowLayers(false);
      }
    });
    return null;
  };

  useEffect(() => {
    if (slider < 0.2) {
      setYear(years[0]);
      setTitle(titres[0]);
    } else if (slider >= 0.2 && slider < 0.4) {
      setYear(years[1]);
      setTitle(titres[1]);
    } else if (slider >= 0.4 && slider < 0.6) {
      setYear(years[2]);
      setTitle(titres[2]);
    } else if (slider >= 0.6 && slider < 0.8) {
      setYear(years[3]);
      setTitle(titres[3]);
    } else {
      setYear(years[4]);
      setTitle(titres[4]);
    }
  }, [slider]);

  const handleSlider = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div id="cadastre" className="pt-10">
      <h1 className="text-4xl text-left text-gray-900 pb-8">Cadastres et cartes</h1>
      <div id="map" className="relative h-[600px]">
        <div className="absolute bottom-2 left-2 z-10">
          <div className="text-left bg-white rounded-md px-3 py-3 mb-2">
            Légende:
            <div className="text-sm">
              <ul>
                <li>
                  <div className="flex items-center">
                    <div className="block h-0.5 w-4 bg-sky-500 mr-2"></div>
                    <div>Vignes de 1832</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="block h-0.5 w-4 bg-green-800 mr-2"></div>
                    <div>Nouvelles vignes</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="block h-0.5 w-4 bg-red-700 mr-2"></div>
                    <div>Anciennes vignes</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="block w-min text-left bg-white rounded-md px-3 py-3">
            <div>
              <span>{title}</span>
            </div>
            <label id="year" htmlFor="slider" className="w-full text-left">
              <span className="text-gray-800 my-2 text-sm">Année: {year}</span>
            </label>
            <input
              onChange={(e) => handleSlider(e)}
              id="slider"
              type="range"
              min="0"
              max="1"
              step="0.001"
              value={slider}
              className="mt-2"
            />
          </div>
        </div>
        <MapContainer center={center} zoom={14} scrollWheelZoom={false}>
          <ShowBaseLayers />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/*Base layers with dynamic change*/}
          <LayerGroup>
            {showLayers && slider < 0.2 && <GeoJSON data={vignes_1832} style={{ color: berney }} />}
          </LayerGroup>
          <LayerGroup>
            {showLayers && slider >= 0.2 && slider < 0.4 && (
              <>
                <GeoJSON data={vignes_1873} style={{ color: berney }} />
                <GeoJSON data={vignes_1873_a} style={{ color: apparues }} />
                <GeoJSON data={vignes_1873_d} style={{ color: disparues }} />
              </>
            )}
          </LayerGroup>
          <LayerGroup>
            {showLayers && slider >= 0.4 && slider < 0.6 && (
              <>
                <GeoJSON data={vignes_1889} style={{ color: berney }} />
                <GeoJSON data={vignes_1889_a} style={{ color: apparues }} />
                <GeoJSON data={vignes_1889_d} style={{ color: disparues }} />
              </>
            )}
          </LayerGroup>
          <LayerGroup>
            {showLayers && slider >= 0.6 && slider < 0.8 && (
              <>
                <GeoJSON data={vignes_1926} style={{ color: berney }} />
                <GeoJSON data={vignes_1926_d} style={{ color: disparues }} />
              </>
            )}
          </LayerGroup>

          <LayerGroup>
            {showLayers && slider >= 0.8 && (
              <>
                <GeoJSON data={vignes_2022_d} style={{ color: disparues }} />
                <GeoJSON data={vignes_2022} style={{ color: berney }} />
              </>
            )}
          </LayerGroup>

          {/*Layers showing for each years all the vignes*/}
          <LayersControl position="topright">
            <LayersControl.Overlay name="Vignes 1832">
              <LayerGroup ref={berneyLayer}>
                <GeoJSON data={vignes_1832} style={{ color: berney }} />
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Vignes 1873">
              <LayerGroup ref={siegfriedLayer1873}>
                <GeoJSON data={vignes_1873_a} style={{ color: siegfried1873 }} />
                <GeoJSON data={vignes_1873} style={{ color: siegfried1873 }} />
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Vignes 1889">
              <LayerGroup ref={siegfriedLayer1889}>
                <GeoJSON data={vignes_1889_a} style={{ color: siegfried1889 }} />
                <GeoJSON data={vignes_1889} style={{ color: siegfried1889 }} />
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Vignes 1926">
              <LayerGroup ref={siegfriedLayer1926}>
                <GeoJSON data={vignes_1926} style={{ color: siegfried1926 }} />
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Vignes 2022">
              <LayerGroup ref={swissTopoLayer}>
                <GeoJSON data={vignes_2022} style={{ color: swisstopo2022 }} />
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
      <p className="indent-5 text-lg text-justify pt-6">
        {`Entre 1832 et 1873, la surface globale des vignes a légèrement diminué, effectivement certaines ont disparu au
        niveau de la gare par exemple due à sa construction en 1856. D’autre part, à l'ouest de Lausanne nous pouvons
        observer l'apparition de nouvelles vignes, souvent venant compléter un vignoble existant. Le même phénomène se
        produit entre 1873 et 1889 quoique avec une disparition un peu plus intense, les vignes dans l’axe Lausanne-gare
        - Ouchy disparaissent grandement. Cependant, cette disparition s’accompagne de quelques apparitions, notamment à
        l’ouest. Au total, entre 1832 et 1889, la 24.4% des surfaces de vignes disparaissent. On observe une grande
        disparition des vignes entre 1889 et 1926, environ 78.7% de la surface viticole a disparu. La dernière période,
        soit de 1926 à aujourd’hui, voit la disparition totale des vignobles du sud de Lausanne, seule une petite
        parcelle de vigne existe encore !`}
      </p>
      <p className="indent-5 text-lg text-justify pb-4">
        {`Les potentiels dynamiques, mise à jour par nos soins et explicitées de façon plus conséquente ci-dessous, sont
        basées sur les événements intervenus pendant les intervalles de temps entre chaque carte : La construction de la
        gare et l’arrivée du tourisme; l’apparition d’un parasite, le phylloxera, et la crise du logement; finalement,
        le besoin d’espace vert publique en zone urbaine.`}
      </p>
    </div>
  );
};

export default Cadastre;
