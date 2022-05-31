import React, { FC } from 'react';

const Tourisme: FC = () => {
  return (
    <div id="tourisme" className="block md:flex md:flex-wrap mt-10 pt-10">
      <div className="flex-1 md:pr-14 self-center pb-8">
        <h1 className="text-4xl text-left text-gray-900">Tourisme</h1>
        <p className="indent-5 text-lg text-justify py-4">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.`}
        </p>
      </div>
    </div>
  );
};

export default Tourisme;
