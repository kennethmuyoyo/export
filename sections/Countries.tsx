import React from 'react';
import Image from 'next/image';

const Countries = () => {
  return (
    
    <div className="mt-20 flex justify-center items-center h-full">
      <div className="w-144px md:w-256px md:px-4 px-4">
      <h2 className="items-center text-center justify-center font-montserrat sm:text-2xl text-xl font-semibold">
            COUNTRIES WE SHIP TO
          </h2>
          <div className="flex justify-center mb-8">
            <Image src="/separator.png" alt="About us" height={200} width={200} />
          </div>
        <Image src="/countries.png" alt="About us" width={900} height={300} loading="eager"/>
      </div>
    </div>
  );
};

export default Countries;
