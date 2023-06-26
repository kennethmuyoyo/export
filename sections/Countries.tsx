import React from 'react';
import Image from 'next/image';

const Countries = () => {
  return (
    <div className="mt-10 flex justify-center items-center h-full">
      <div className="w-144px md:w-256px md:px-4 px-4">
        <Image src="/countries.png" alt="About us" width={900} height={300} loading="eager"/>
      </div>
    </div>
  );
};

export default Countries;
