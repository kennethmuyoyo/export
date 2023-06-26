import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import ButtonWhite from '../components/Buttons/ButtonWhite';

const navigation = [
  { name: 'Home', href: '#Home' },
  { name: 'About', href: '#About' },
  { name: 'Services', href: '#Services' },
  { name: 'Our Products', href: '#Products' },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState<number | null>(null);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const redirectToContactUsPage = () => {
    document.querySelector('#Contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`bg-green-500 w-full z-50 relative px-3 py-2`}>
      <div className='mx-auto max-w-7xl px-6 sm:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div>
            <Image
              src='/logo.png'
              alt='logo'
              width={50}
              height={50}
              placeholder='empty'
              className=''
              loading='eager'
            />
          </div>
          <div className='flex items-center justify-center gap-4'>
            {toggle ? (
              <HiX
                size={30}
                onClick={() => setToggle(!toggle)}
                className='sm:hidden block h-6 w-6'
              />
            ) : (
              <HiMenu
                size={30}
                onClick={() => setToggle(!toggle)}
                className='sm:hidden block h-6 w-6'
              />
            )}
            <div className='hidden sm:flex sm:gap-4 items-center'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-white font-medium font-montserrat'
                >
                  {item.name}
                </a>
              ))}
              <div className='mt-2 flex items-center justify-center'>
                <ButtonWhite buttonTitle='Contact Us' handleClick={redirectToContactUsPage}/>
              </div>
            </div>
          </div>
        </div>
        {toggle && windowSize !== null && windowSize <= 640 && (
          <div className='flex flex-col items-center justify-center space-y-5 z-50 overflow-y-auto'>
            <ul className='text-center'>
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setToggle(!toggle)}
                    className='text-black uppercase'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className='flex items-center justify-center'>
                <ButtonWhite buttonTitle='Contact Us' handleClick={redirectToContactUsPage}/>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
