import React, { FC, useEffect, useState } from 'react';
import google_map_0 from './../assets/map.png';
import google_map_1 from './../assets/map_1.png';
import google_map_2 from './../assets/map_2.png';
import google_map_3 from './../assets/map_3.png';

const Cadastre: FC = () => {
  const years = [1831, 1873, 1920, 2022];
  const cadastres = [google_map_0, google_map_1, google_map_2, google_map_3];
  const [slider, setSlider] = useState(0);
  const [cadastreToDisplay, setCadastreToDisplay] = useState([]);
  const [opacities, setOpacities] = useState([1, 0, 0, 0]); // between [0, 1]
  const [legend, setLegend] = useState(1832);

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
    } else if (slider >= 0.25 && slider < 0.5) {
      setLegend(years[1]);
    } else if (slider >= 0.5 && slider < 0.75) {
      setLegend(years[2]);
    } else {
      setLegend(years[3]);
    }
  }, [slider]);

  const handleSlider = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div id="cadastre" className="pt-10">
      <h1 className="text-4xl text-left text-gray-900 pb-8">Cadastre de Berney</h1>
      <div id="maps" className="w-full h-[610px] relative">
        {cadastres.map((cadastre, index) => (
          <img
            key={index}
            style={{ opacity: `${opacities[index]}` }}
            className="w-full h-[610px] object-cover absolute top-0 left-0"
            src={cadastre}
            alt=""
          />
        ))}
      </div>

      <div>
        <div>
          <h2>Year:</h2>
          <div>
            <label id="year" htmlFor="slider">
              {legend}
            </label>
            <input
              onChange={(e) => handleSlider(e)}
              id="slider"
              type="range"
              min="0"
              max="1"
              step="0.001"
              value={slider}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastre;
