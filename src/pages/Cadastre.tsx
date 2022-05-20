import React, { FC, useEffect, useState } from 'react';
import {
  LayerGroup,
  MapContainer,
  TileLayer,
  useMap,
  GeoJSON,
  LayersControl,
  Marker,
  Popup,
  Circle,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import vignes_1832_json from './cartes/vignes_1832.json';
import L, { LatLngExpression } from 'leaflet';

const Cadastre: FC = () => {
  const years = [1832, 1873, 1920, 2022];
  //const cadastres = [google_map_0, google_map_1, google_map_2, google_map_3];
  const titres = ['Cadastre de Berney', 'Carte Siegried', 'Carte 2', 'Carte 3'];
  const [slider, setSlider] = useState(0);
  const [opacities, setOpacities] = useState([1, 0, 0, 0]); // between [0, 1]
  const [legend, setLegend] = useState(1832);
  const [title, setTitle] = useState('');

  const center: LatLngExpression = [46.519653, 6.632273];

  const vignes_1832 = JSON.parse(JSON.stringify(vignes_1832_json));

  useEffect(() => {
    if (slider < 0.25) {
      setLegend(years[0]);
      setTitle(titres[0]);
    } else if (slider >= 0.25 && slider < 0.5) {
      setLegend(years[1]);
      setTitle(titres[1]);
    } else if (slider >= 0.5 && slider < 0.75) {
      setLegend(years[2]);
      setTitle(titres[2]);
    } else {
      setLegend(years[3]);
      setTitle(titres[3]);
    }
  }, [slider]);

  const handleSlider = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div id="cadastre" className="pt-10">
      <h1 className="text-4xl text-left text-gray-900 pb-8">Cadastres et cartes</h1>
      <div id="map" className=" relative h-[600px]">
        <div className="absolute bottom-2 left-2 z-10">
          <div className="text-left bg-white rounded-md px-3 py-3 mb-2">
            <span>{title}</span>
          </div>
          <div className="block w-min text-left bg-white rounded-md px-3 py-3">
            <label id="year" htmlFor="slider" className="w-full text-left">
              <span className="text-gray-800 my-2">Année: {legend}</span>
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
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayersControl position="topright">
            <LayersControl.Overlay checked name="Vignes 1832">
              <LayerGroup>
                <GeoJSON data={vignes_1832} />
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
