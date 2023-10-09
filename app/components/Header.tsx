"use client"
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';


const Header: React.FC = () => {
    const pathname = usePathname()
    // console.log(pathname);
    return (
        <div className='fixed left-0 right-0 max-w-7xl mx-auto -top-2 md:-top-0 z-50 shadow-xl'>
            <div className='flex items-center bg-[#1B1B1B] justify-between px-4 pt-4 pb-2 md:pt-0 md:pb-0'>
                <Link href={"/"}><img className='md:w-16 w-10 cursor-pointer' src="https://i.ibb.co/tBtY92n/Colorful-Modern-Stream-C-Free-Logo.png" alt="" /></Link>
                {
                    pathname === "/" && (
                        <div className='flex gap-4 items-center'>
                            <div className="relative flex items-center">
                                <svg className="w-4 absolute mx-3 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <input type="search" className="block md:w-[600px] px-2 py-2 pl-10 text-sm text-white outline-none rounded-md shadow-md" placeholder="Search movie or theatres..." required />
                            </div>
                            <select className="bg-[#3B3B3B] w-[180px] md:block hidden text-xs text-white outline-none px-2 py-[10px] rounded-md">
                                <option className=''>TV show?</option>
                                <option>Game of Thrones</option>
                                <option>Lost</option>
                                <option>Breaking Bad</option>
                                <option>Walking Dead</option>
                            </select>
                        </div>)
                }
                {
                    pathname === "/dashboard" &&
                    <h1 className='text-[#FCCB08] text-xl font-semibold border-2 border-[#FCCB08] rounded-lg py-1 px-2'>User dashboard</h1>
                }
                {
                    pathname.includes("/details") &&
                    <h1 className='text-[#FCCB08] text-xl font-semibold border-2 border-[#FCCB08] rounded-lg py-1 px-2'>Movie Details</h1>
                }
                {pathname === "/about" &&
                    <div>
                        <ul className='flex gap-6 text-lg'>
                            <li className='uppercase cursor-pointer hover-underline-none-animation text-[#FCCB08]'>about</li>
                            <li className='uppercase cursor-pointer hover-underline-animation'>awards</li>
                            <li className='uppercase cursor-pointer hover-underline-animation'>team</li>
                            <li className='uppercase cursor-pointer hover-underline-animation'>our brands</li>
                        </ul>
                    </div>
                }

                {/* <div className='flex items-center gap-3 w-20 justify-end'> */}
                {/* <UserButton afterSignOutUrl="/" /> */}
                <label htmlFor="my-drawer-4" className="cursor-pointer hover-light-effect">
                    <svg
                        className="fill-current text-[#FCCB08] "
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                    >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                </label>
                {/* </div> */}

            </div>
            {
                pathname === '/' &&
                <div className='hidden md:block'>
                    <div className='flex text-white text-xs justify-between items-center py-3 px-3 bg-[#1B1B1B]'>
                        <ul className='flex items-center gap-2'>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>ICE</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>IMAX</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>4DX</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Playhouse</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>GOLD</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>LUXE</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>P[XL]</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>ONYX</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Drive-In</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Director's Cut</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>BigPix</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Club</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Kiddles</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Laser</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>MX4D</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Onyx-Diner</li>
                        </ul>
                        <ul className='flex items-center gap-2'>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Cinemas</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Offers</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Advertise</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Gift Cards</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] duration-150'>Movie Calendar</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;