import React, { useState } from 'react';
import Image from 'next/image';

interface Speciality {
  description: string;
  tags: string[];
  imgUrl: string;
}

const Products: React.FC = () => {
  const specialities: Speciality[] = [
    {
        description: "Ignite your taste buds with the fiery intensity of our Bird Eye Chillies Ignite your taste buds with the fiery intensity of our Bird Eye Chillies. These small, slender peppers pack a powerful punch, adding a tantalizing heat to your dishes. Grown with utmost care and precision, our Bird Eye Chillies are known for their vibrant color, robust flavor, and exceptional spiciness.",
        tags: ['Bird Eye Chillies'],
        imgUrl: '/BulletChillies.png',
      },  
      {
        description: "Discover the velvety elegance of our Aubergines, also known as Ravaya. With their glossy purple skin and tender flesh, these egg-shaped delights are a chef\'s dream. Versatile in their culinary applications, our Aubergines add a luscious texture and subtle, earthy flavor to a variety of dishes.",
        tags: ['Aubergine'],
        imgUrl: '/Aubergine.png',
      },  
    {
    
        imgUrl: "/Avocado.png",
        tags: ['Avocado'],
        description: 'Indulge in the creamy decadence of our Avocados, nature\'s buttery treasure. Bursting with wholesome goodness and essential nutrients, our Avocados are handpicked at the peak of ripeness. Their smooth, velvety texture and delicate, nutty flavor make them the perfect addition to salads, sandwiches, and dips.',
    },
    {
        imgUrl: "/Karela.png",
        tags: ['Karela'],
        description: 'Embrace the unique bitterness of our Karela, also known as Bitter Gourd. With its distinct flavor profile, Karela adds a bold and intriguing taste to various dishes. Packed with essential nutrients, it offers a range of health benefits and is often used in traditional cuisines for its therapeutic properties.',
    },
    {
        imgUrl: "/BulletChillies.png",
        tags: ['Bullet Chillies'],
        description: 'Delve into a realm of rich and smoky flavors with our Bullet Chillies. These elongated peppers are renowned for their distinctive taste and versatility. Whether you prefer a mild kick or crave a fiery explosion, our Bullet Chillies offer a range of heat levels to suit your culinary preferences.',
    },
    {
        tags: ['Sugar Snaps'],
        imgUrl: "/SugarSnaps.png",
        description: 'Experience the delightful crunch and natural sweetness of our Sugar Snaps. These crisp and juicy pea pods offer a refreshing burst of flavor, making them a favorite for snacking, stir-fries, and salads. Harvested with care, our Sugar Snaps retain their vibrant green color and irresistible taste.',
    },
    {
        tags: ['Asparagus'],
        imgUrl: "/Asparagus.png",
        description: 'Savor the delicate and tender beauty of our Asparagus. Known for its slender spears and earthy flavor, Asparagus is a versatile vegetable that can be enjoyed in various culinary creations. Whether steamed, grilled, or sautéed, its subtle and refined taste brings a touch of elegance to any dish.',
    },
  ];

  const Products: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleSpecialityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log('handleSpecialityChange called with value:', e.target.value);
      setActiveIndex(Number(e.target.value));
    };
  
    return (
      <div className="relative bg-green-500 text-white flex flex-wrap min-h-full items-center mb-5">
        <div className="text-left md:text-left md:w-2/3 px-4 md:px-20">
          <p className="mt-8 mx-4 text-white font-montserrat font-semibold sm:text-2xl text-xl">OUR TOP PRODUCTS</p>
  
          <div className="mx-4">
            <select
              value={activeIndex}
              onChange={handleSpecialityChange}
              className="bg-black text-white px-3 py-2 mt-4 rounded-full text-xs font-montserrat"
            >
              {specialities.map((speciality, index) => (
                <option value={index} key={index} className={`text-black bg-gray-300`}>
                  {speciality.tags[0]}
                </option>
              ))}
            </select>
          </div>
  
          <div className="mt-4">
            <p className="mx-4 text-gray-100 font-poppins text-sm sm:text-base">{specialities[activeIndex].description}</p>
          </div>
  
          <div className="mt-10 mb-6">
            <a href="#Contact" className="font-montserrat mx-4 mt-8 bg-gray-100 text-black px-6 py-2 rounded-lg mb-7">
              Contact Us
            </a>
          </div>
        </div>
  
        <div className="w-full md:w-1/3 p-8 flex pr-20">
          <div className="rounded-md overflow-hidden">
            <Image
              src={specialities[activeIndex].imgUrl}
              alt={specialities[activeIndex].tags[0]}
              width={500}
              height={300}
              sizes="(max-width: 600px) 100vw, 50vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    );
  };
  
  return <Products />;
};
  export default Products;