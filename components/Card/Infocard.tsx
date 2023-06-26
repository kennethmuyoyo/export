import Image from "next/image";

export default function Infocard() {
  return (
    <div className="p-6 w-full mx-auto bg-white rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-12 sm:gap-0">
      <div className="flex-1 flex flex-col items-center">
        <span className="font-montserrat text-sm sm:text-xl mb-2">QUALITY</span>
        <div className="h-12 w-30 flex items-center justify-center rounded-full transform hover:scale-150 transition duration-300 ease-in-out">
          <Image src="/Quality.png" alt="Quality" width={50} height={50} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <span className="font-montserrat text-sm sm:text-xl mb-2">FRESH</span>
        <div className="flex items-center justify-center rounded-full transform hover:scale-150 transition duration-300 ease-in-out">
          <Image src="/Freshness.png" alt="Fresh" width={50} height={50} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <span className="font-montserrat text-sm sm:text-xl mb-2">RELIABLE</span>
        <div className="h-12 w-30 flex items-center justify-center rounded-full transform hover:scale-150 transition duration-300 ease-in-out">
          <Image src="/Reliable.png" alt="Reliable" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}