import React, { FC, useEffect, useState } from 'react';
import google_map_0 from './../assets/map.png';
import google_map_1 from './../assets/map_1.png';
import google_map_2 from './../assets/map_2.png';
import google_map_3 from './../assets/map_3.png';

const Cadastre: FC = () => {
  const years = [1831, 1873, 1920, 2022];
  const cadastres = [google_map_0, google_map_1, google_map_2, google_map_3];
  const titres = ['Cadastre de Berney', 'Carte Siegried', 'Carte 2', 'Carte 3'];
  const [slider, setSlider] = useState(0);
  const [opacities, setOpacities] = useState([1, 0, 0, 0]); // between [0, 1]
  const [legend, setLegend] = useState(1832);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const newOpacity = [...opacities];
    if (slider < 0.25) {
      newOpacity[0] = 1 - slider / 0.25;
      newOpacity[1] = slider / 0.25;
      newOpacity[2] = 0;
      newOpacity[3] = 0;
    } else if (slider >= 0.25 && slider < 0.5) {
      newOpacity[0] = 0;
      newOpacity[1] = 1 - (slider - 0.25) / 0.25;
      newOpacity[2] = (slider - 0.25) / 0.5;
      newOpacity[3] = 0;
    } else if (slider >= 0.5 && slider < 0.75) {
      newOpacity[0] = 0;
      newOpacity[1] = 0;
      newOpacity[2] = 1 - (slider - 0.5) / 0.25;
      newOpacity[3] = (slider - 0.5) / 0.25;
    } else {
    }

    setOpacities(newOpacity);
  }, [slider]);

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
      <div id="maps" className="w-full md:h-[610px] h-[400px] relative">
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
        {cadastres.map((cadastre, index) => (
          <img
            key={index}
            style={{ opacity: `${opacities[index]}` }}
            className="w-full md:h-[610px] h-[400px] object-cover absolute top-0 left-0"
            src={cadastre}
            alt=""
          />
        ))}
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
