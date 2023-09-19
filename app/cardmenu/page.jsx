import React from 'react';

const page = () => {
    return (
        <div className='bg-[#042E1F] min-h-screen py-5'>
            <h1 className='text-3xl md:text-left text-center font-semibold text-white px-8 my-6'>Active Contests</h1>
            <div className='text-white flex flex-col gap-5'>
                {/* first card  */}
                <div className='grid gap-7 justify-center md:text-left text-center md:grid-cols-5 grid-cols-2 items-center md:w-[95%] w-[90%] mx-auto px-6 py-5 rounded-lg bg-[#254239d2] backdrop-blur-md'>
                    <div className='flex items-center gap-2 justify-center'>
                        <div className='bg-[#41C0CC] rounded text-center px-2'>
                            <p className='font-semibold'>30</p>
                            <p>AUG</p>
                        </div>
                        <div>
                            <p className='text-[#60747d] flex'>Race<span className='hidden md:block'>:</span></p>
                            <p className='font-semibold'>daily</p>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <p className='text-[#60747d]'>Betting Ends In<span className='hidden md:block'>:</span></p>
                        <div className='font-semibold'>
                            <p>00:09:09:34</p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-[#60747d]'>Starts:</p>
                        <div className='flex gap-2 items-center font-semibold'>
                            <p>Tue, 2023-08-29</p>
                            <p>4:00 pm</p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-[#60747d]'>Ends:</p>
                        <div className='flex gap-2 items-center font-semibold'>
                            <p>Wed, 2023-08-30</p>
                            <p>4:00 pm</p>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <p className='text-[#60747d]'>Started</p>
                        <div className='font-semibold'>
                            <p>Aug 29 @ 4pm</p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-[#60747d]'>Betting Ends In:</p>
                        <div className='font-semibold'>
                            <p>00:09:09:34</p>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <p className='text-[#60747d]'>Ends</p>
                        <div className='font-semibold'>
                            <p>Aug 30 @ 4pm</p>
                        </div>
                    </div>
                    <button className='bg-[#277772] col-span-2 md:col-span-1 mx-auto py-[10px] text-center md:w-[110px] w-3/4 rounded-full hover:shadow-lg hover:shadow-[#41c0cc61] duration-150'>Enter Bet</button>
                </div>
                {/* second card  */}
                <div className='grid gap-7 justify-center md:text-left text-center md:grid-cols-5 grid-cols-2 items-center md:w-[95%] w-[90%] mx-auto px-6 py-5 rounded-lg bg-[#254239d2] backdrop-blur-md'>
                    <div className='flex items-center gap-2 justify-center'>
                        <div className='bg-[#41C0CC] rounded text-center px-2'>
                            <p className='font-semibold'>01</p>
                            <p>SEP</p>
                        </div>
                        <div>
                            <p className='text-[#60747d] flex'>Race<span className='hidden md:block'>:</span></p>
                            <p className='font-semibold'>weekly</p>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <p className='text-[#60747d]'>Betting Ends In<span className='hidden md:block'>:</span></p>
                        <div className='font-semibold'>
                            <p>02:09:09:34</p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-[#60747d]'>Starts:</p>
                        <div className='flex gap-2 items-center font-semibold'>
                            <p>Fri, 2023-08-25</p>
                            <p>4:00 pm</p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-[#60747d]'>Ends:</p>
                        <div className='flex gap-2 items-center font-semibold'>
                            <p>Fri, 2023-09-01</p>
                            <p>4:00 pm</p>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <p className='text-[#60747d]'>Started</p>
                        <div className='font-semibold'>
                            <p>Aug 25 @ 4pm</p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-[#60747d]'>Betting Ends In:</p>
                        <div className='font-semibold'>
                            <p>00:09:09:34</p>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <p className='text-[#60747d]'>Ends</p>
                        <div className='font-semibold'>
                            <p>Sep 01 @ 4pm</p>
                        </div>
                    </div>
                    <button className='bg-[#277772] col-span-2 md:col-span-1 mx-auto py-[10px] text-center md:w-[110px] w-3/4 rounded-full hover:shadow-lg hover:shadow-[#41c0cc61] duration-150'>Enter Bet</button>
                </div>
            </div>
        </div>
    );
};

export default page;