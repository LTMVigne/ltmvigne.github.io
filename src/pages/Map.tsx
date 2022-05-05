import React, { FC } from 'react';
import google_map from './../assets/map.png';

const Map: FC = () => {
  return (
    <div>
      <div id="map">
        <img src={google_map} alt="" className="w-full" />
      </div>

      <div className="map-overlay top">
        <div className="map-overlay-inner">
          <h2>Significant earthquakes in 2015</h2>
          <label id="month"></label>
          <input id="slider" type="range" min="0" max="11" step="1" value="0" />
        </div>
        <div className="map-overlay-inner">
          <div id="legend" className="legend">
            <div className="bar"></div>
            <div>Magnitude (m)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
