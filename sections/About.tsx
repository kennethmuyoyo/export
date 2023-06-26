import React from 'react'
import Image from 'next/image'
// import aboutfruit from '@/assets/aboutfruit.png'
// import separator from '@/assets/separator.png'
import ButtonGreen from '../components/Buttons/ButtonGreen'

function About() {
  function redirectToAboutUsPage(): void {
    document.querySelector('#Contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className='relative min-h-full sm:mt-2 mt-5 sm:mx-16 px-9 mx-8 flex flex-col justify-center items-center text-center'>
      <div className="flex flex-col items-center text-center">
        <h2 className='mt-16 font-montserrat font-semibold sm:text-2xl text-xl'>WELCOME TO EXPORTIVA</h2>
        <div className='mb-8'>
          <Image src="/separator.png" alt="About us" height={200} width={200}/>
        </div>
        <h2 className='font-montserrat font-medium sm:text-[20px] text-[15px]'>Welcome to Exportiva, your trusted partner for export services in Kenya,</h2>
        <h2 className='font-montserrat font-medium sm:text-[20px] text-[15px]'>hope to work with you soon</h2>
      </div>

      <div className="sm:grid sm:grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center text-center sm:items-start sm:justify-start sm:text-start">
        <div className="md:col-span-2">
            <h2 className='sm:mt-12 mt-8 font-montserrat sm:text-2xl text-xl font-semibold'>ABOUT US</h2>
            <p className='mt-6 font-montserrat font-medium sm:text-[20px] text-[15px]'>At Exportiva, we take pride in our commitment to excellence and professionalism. Our team of experts ensures that all our products meet rigorous quality standards and adhere to international export regulations. We meticulously handle the logistics, documentation, and customs clearance processes, allowing you to focus on your core business while we take care of the export intricacies. </p>
            <div className='mt-12 mb-6'>   
                <ButtonGreen buttonTitle='Contact us' handleClick={redirectToAboutUsPage}/>
            </div>
        </div>
        <div className="md:col-span-1 flex items-center justify-center md:justify-end md:mr-10 md:mt-12 mt-0">
            <Image src="/aboutfruit.png" alt="About us" height={200} width={300}/>
        </div>        
      </div>
    </div>
  )
}

export default About

