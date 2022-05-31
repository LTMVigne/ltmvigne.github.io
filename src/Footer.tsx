import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white content-center py-4 shadow relative left-0 bottom-0 right-0 w-full border-t">
      <span className="text-sm text-gray-700 sm:text-center">
        © 2022 - LTM Vigne{' '}
        <a
          href="https://github.com/LTMVigne/ltmvigne.github.io"
          target="#"
          className="px-2 hover:underline text-blue-600"
        >
          https://github.com/LTMVigne/ltmvigne.github.io
        </a>
      </span>
    </footer>
  );
};

export default Footer;
