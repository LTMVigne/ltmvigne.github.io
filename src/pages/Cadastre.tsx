import React, { FC, useEffect, useRef, useState } from 'react';
import { LayerGroup, MapContainer, TileLayer, GeoJSON, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import vignes_1832_json from './cartes/vignes_1832.json';
import vignes_1873_json from './cartes/vignes_1873.json';
import vignes_1873_apparues_json from './cartes/vignes_1873_apparues.json';
import vignes_1873_disparues_json from './cartes/vignes_1873_disparues.json';
import { LatLngExpression } from 'leaflet';

const Cadastre: FC = () => {
  const center: LatLngExpression = [46.519653, 6.632273];

  const years = [1832, 1873, 1920, 2022];
  const titres = ['Cadastre de Berney', 'Carte Siegried', 'Carte 2', 'Carte 3'];
  const [slider, setSlider] = useState(0);
  const [year, setYear] = useState(1832);
  const [title, setTitle] = useState('');
  const [showLayers, setShowLayers] = useState(true);

  // Geojson
  const vignes_1832 = JSON.parse(JSON.stringify(vignes_1832_json));
  const vignes_1873 = JSON.parse(JSON.stringify(vignes_1873_json));
  const vignes_1873_a = JSON.parse(JSON.stringify(vignes_1873_apparues_json));
  const vignes_1873_d = JSON.parse(JSON.stringify(vignes_1873_disparues_json));

  // Overlays
  const berneyLayer = useRef();
  const siegfriedLayer = useRef();

  // Styles
  const berney = '#0EA5E9';
  const siegfried = '#8a46d4';
  const apparues = '#22C55E';
  const disparues = '#B91C1C';

  // Control if the base layers are shown
  const ShowBaseLayers = () => {
    const map = useMap();
    map.on('overlayadd', () => {
      setShowLayers(false);
    });
    map.on('overlayremove', () => {
      if (!map.hasLayer(berneyLayer.current) && !map.hasLayer(siegfriedLayer.current)) {
        setShowLayers(true);
      } else {
        setShowLayers(false);
      }
    });
    return null;
  };

  useEffect(() => {
    if (slider < 0.25) {
      setYear(years[0]);
      setTitle(titres[0]);
    } else if (slider >= 0.25 && slider < 0.5) {
      setYear(years[1]);
      setTitle(titres[1]);
    } else if (slider >= 0.5 && slider < 0.75) {
      setYear(years[2]);
      setTitle(titres[2]);
    } else {
      setYear(years[3]);
      setTitle(titres[3]);
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
                    <div className="block h-0.5 w-4 bg-green-500 mr-2"></div>
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
            {showLayers && slider <= 0.25 && <GeoJSON data={vignes_1832} style={{ color: berney }} />}
          </LayerGroup>
          <LayerGroup>
            {showLayers && slider > 0.25 && (
              <>
                <GeoJSON data={vignes_1873} style={{ color: berney }} />
                <GeoJSON data={vignes_1873_a} style={{ color: apparues }} />
                <GeoJSON data={vignes_1873_d} style={{ color: disparues }} />
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
              <LayerGroup ref={siegfriedLayer}>
                <GeoJSON data={vignes_1873_a} style={{ color: siegfried }} />
                <GeoJSON data={vignes_1873} style={{ color: siegfried }} />
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
      <p className="indent-5 text-lg text-justify py-8">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.`}
      </p>
    </div>
  );
};

export default Cadastre;
