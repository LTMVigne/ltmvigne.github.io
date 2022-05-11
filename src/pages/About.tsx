import React, { FC } from 'react';

const About: FC = () => {
  return (
    <div id="about" className="block md:flex md:flex-wrap mt-10 pt-10">
      <div className="flex-1 md:pr-14 self-center pb-8">
        <h1 className="text-4xl text-left text-gray-900">A propos</h1>
        <div className="text-lg text-justify py-4">
          <p className="mb-4">La crème de la crème:</p>
          <ul className="px-8">
            <li>Farida Aclimandos</li>
            <li>Capucine Berger-Sigrist</li>
            <li>Mathias Brühlmann</li>
            <li>Pierre Colson</li>
            <li>Danae Papadopoulos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
