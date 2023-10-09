import React from 'react';

const IntroducingBanner = () => {
    return (
        <div className='flex items-center justify-between m-4 md:m-10 bg-[#1A1A1A] text-white md:px-12 px-4 py-6 rounded'>
            <div className='flex flex-col gap-4'>
                <h1 className='md:text-2xl text-sm md:block hidden'>Introducing a loyalty program with special <br />rewards and exclusive benefits!</h1>
                <h1 className='md:text-2xl text-xs md:hidden block'>Introducing a loyalty program with special rewards and exclusive benefits!</h1>
                <div className='flex items-center md:gap-8 gap-3'>
                    <button className='hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-2 py-1 md:px-5 md:py-[8px] rounded duration-150'>KNOW MORE</button>
                    <h1 className='md:text-base cursor-pointer text-xs'>ALLREADY A MEMBER?</h1>
                </div>
            </div>
            <img className='md:w-[140px] w-16 md:mx-5' src="https://i.ibb.co/tBtY92n/Colorful-Modern-Stream-C-Free-Logo.png" alt="" />
        </div>
    );
};

export default IntroducingBanner;