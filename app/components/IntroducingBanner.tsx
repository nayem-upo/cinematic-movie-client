import React from 'react';

const IntroducingBanner = () => {
    return (
        <div className='flex items-center justify-between m-10 bg-[#1A1A1A] text-white px-12 py-6 rounded'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl'>Introducing a loyalty program with special <br />rewards and exclusive benefits!</h1>
                <div className='flex items-center gap-8'>
                    <button className='hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150'>KNOW MORE</button>
                    <h1>ALLREADY A MEMBER?</h1>
                </div>
            </div>
            <img className='w-[140px] mx-5' src="https://i.ibb.co/tBtY92n/Colorful-Modern-Stream-C-Free-Logo.png" alt="" />
        </div>
    );
};

export default IntroducingBanner;