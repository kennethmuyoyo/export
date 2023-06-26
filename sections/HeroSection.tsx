import React from 'react'
import ButtonGreen from '../components/Buttons/ButtonGreen'
import Infocard from '../components/Card/Infocard'

function HeroSection() {
    function redirectToAboutUsPage(): void {
        document.querySelector('#Products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className='relative min-h-full flex-wrap items-center text-center py-20 ' 
            style={{ 
                backgroundImage: `url("/Vegetable.png")`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center 35%',
                backgroundRepeat: 'no-repeat'
            }}>
            
            <div>
                <h2 className='mt-20 font-montserrat font-semibold md:text-[60px] sm:text-[40px] text-[25px] mx-5'>EXPORTERS OF FRESH</h2>
                <h2 className='font-montserrat font-semibold md:text-[60px] sm:text-[40px] text-[25px] mx-5'>FRUITS & VEGETABLES</h2>
            </div>
                
            <div className='mt-10'>   
                <ButtonGreen buttonTitle='OUR PRODUCTS' handleClick={redirectToAboutUsPage}/>
            </div>

            <div className='mt-20 px-28 sm:px:24 w-full'>
                <Infocard />
            </div>
        </div>
    )
}

export default HeroSection
