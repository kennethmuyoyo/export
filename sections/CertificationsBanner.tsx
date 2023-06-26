import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CertificationsBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
        <div className="mt-14 mx-auto md:px-20 px-4 flex justify-cente items-centerr">
        <Slider {...settings} className="w-full md:px-20 px-5 items-center justify-center">
          <div>
            <Image src="/one.png" alt="About us" height={60} width={60}  />
          </div>
          <div>
            <Image src="/two.png" alt="About us" height={100} width={60} />
          </div>
          <div>
            <Image src="/three.png" alt="About us" height={100} width={60} />
          </div>
          <div>
            <Image src="/four.png" alt="About us" height={100} width={60} />
          </div>
          <div>
            <Image src="/five.png" alt="About us" height={100} width={60} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CertificationsBanner;
