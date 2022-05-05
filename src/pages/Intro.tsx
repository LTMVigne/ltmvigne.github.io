import React, { FC } from 'react';
import cadastre_1 from './../assets/DecoupeBerney_072.png';

const Intro: FC = () => {
  return (
    <div className="block md:flex md:flex-wrap my-10 py-20">
      <div className="flex-1 pr-14 self-center pb-8">
        <h1 className="text-4xl text-left text-gray-900">Introduction</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.`}
        </p>
      </div>
      <img src={cadastre_1} alt="" className="md:w-1/2 md:h-1/2 flex-1" />
    </div>
  );
};

export default Intro;
