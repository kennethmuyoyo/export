import React from 'react'
import Image from 'next/image'

const services = [
    {
      id: 1,
      name: 'Quality Assurance',
      imageSrc: "/Quality_assurance.png",
      imageAlt: "Quality Assurance",
      description: 'At Exportiva, we are deeply committed to upholding the highest quality standards. Our vegetables undergo rigorous quality control processes at every stage, ensuring that only the freshest and finest produce reaches our customers. We adhere to international food safety regulations and have obtained relevant certifications to validate our commitment to excellence. From organic certifications to compliance with industry-specific quality standards, we leave no stone unturned in safeguarding the freshness and safety of our exported vegetables. Our stringent quality control measures include comprehensive traceability systems, allowing us to track the journey of each vegetable from farm to shipment.',
    },
    {
      id: 2,
      name: 'Order and Shipping',
      imageSrc: "/Shipping_service.png",
      imageAlt: "Order and Shipping",
      description: 'Ordering with Exportiva is convenient and hassle-free. Reach out to our customer service team through contact details, order forms, or our user-friendly online system. We help you select vegetables, provide guidance, and address inquiries. For shipping, expect reliable and timely delivery. We use efficient packaging techniques, selecting materials to protect and preserve freshness. Choose from flexible transportation methods (air, sea, land) at competitive rates. We comply with customs and export regulations and offer various delivery options for optimal condition and on-time arrival.',
    },
    {
      id: 3,
      name: 'Packaging and Labeling',
      imageSrc: "/packaging.png",
      imageAlt: "Packaging",
      description: 'At Exportiva, we prioritize international packaging and labeling standards to preserve the quality of your vegetable shipments during transportation. Our experts utilize industry best practices and eco-friendly materials for optimal protection and freshness. With accurate labeling that meets regulations, we deliver a seamless and compliant export experience. Trust us for comprehensive services, quality assurance, efficient processes, and meticulous packaging and labeling. Relax and focus on your core business while we handle the details.',
    },
  ]

  export default function Services() {
    return (
      <div className="bg-white relative flex flex-wrap min-h-full sm:mx-16 px-9 mx-1 mb-10 mt-8">
        <div className="max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="items-center text-center justify-center font-montserrat sm:text-2xl text-xl font-semibold">
            OUR SERVICES
          </h2>
          <div className="flex justify-center mb-8">
            <Image src="/separator.png" alt="About us" height={200} width={200} />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {services.map((services) => (
              <div
                key={services.id}
                className="group relative shadow-md bg-gray-100 rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="w-full overflow-hidden bg-gray-100 lg:aspect-none group-hover:opacity-75 lg:h-56 flex justify-center items-center">
                <Image
                  src={services.imageSrc}
                  alt={services.imageAlt}
                  className="object-cover object-center lg:h-56 lg:w-full w-full rounded-md"
                  height={150}
                  width={150}
                />
                </div>
                <div className="mt-4">
                  <h3 className="font-montserrat font-semibold text-lg text-gray-900">{services.name}</h3>
                  <p className="mt-2 font-montserrat text-[15px] text-gray-700">{services.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  
