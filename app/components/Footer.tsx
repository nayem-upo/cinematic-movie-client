import React from 'react';

const Footer = () => {
    return (
        <div
            className='py-10'
            style={{
                backgroundImage: `url("https://www.pvrcinemas.com/assets/images/backgrounds/footerbg.png")`,
                backgroundSize: 'cover',
                position: 'relative',
            }}>
            <div className='text-[#848484] flex justify-center mx-auto'>
                <ul className='mx-auto flex flex-col gap-2'>
                    <li className='font-semibold text-[#FCCB08]'>GENERAL</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>ABOUT US</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>FAQ'S</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>INVESTORS SECTION</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>CAREER</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>NEWS</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>FEEDBACK</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>EVENTS</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>NVSP</li>
                </ul>
                <div className='mx-auto grid grid-cols-3 gap-5'>
                    <ul className='mx-auto flex flex-col gap-2'>
                        <li className='font-semibold text-[#FCCB08]'>PVR INOX BRANDS</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>DIRECTOR'S CUT</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>PICTURES</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>ICE</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>IMAX</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>4DX</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>PLAYHOUSE</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>GOLD</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>LUXE</li>
                    </ul>
                    <ul className='mx-auto flex flex-col gap-2'>
                        <li className='cursor-default'>_</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>P[XL]</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>ONYX</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>BIGPIX</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>CLUB</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>KIDDLES</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>LASER</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>MX4D</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>ONYX-DINER</li>
                    </ul>
                    <ul className='mx-auto flex flex-col gap-2'>
                        <li className='cursor-default'>_</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>SCREENX</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>AMPLIX</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>DOLBY</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>INSIGNIA</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>NEST</li>
                        <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>V PRISTINE</li>
                    </ul>
                </div>
                <ul className='mx-auto flex flex-col gap-2'>
                    <li className='font-semibold text-[#FCCB08]'>CINEMAS</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>CINEMAS</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>UPCOMING</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>ADVERTISE</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>BEYOND MOVIES</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>BIRTHDAY REQUEST</li>
                    <li className='hover:text-[#FCCB08] cursor-pointer duration-150'>SUBSCRIBE TO NEWSLETTER</li>
                </ul>
            </div>
            <div className='flex justify-evenly items-center py-6'>
                <img className='w-16' src="https://i.ibb.co/tBtY92n/Colorful-Modern-Stream-C-Free-Logo.png" alt="" />
                <h1 className='hover:text-[#FCCB08] text-white cursor-pointer duration-150 font-semibold'>PRIVACY POLICY</h1>
                <h1 className='hover:text-[#FCCB08] text-white cursor-pointer duration-150 font-semibold'>TERMS OF USE</h1>
                <div className='flex gap-4 items-center'>
                    <svg
                        className='cursor-pointer rounded-full hover:bg-[#85763c] duration-200'
                        width="33px"
                        height="33px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">

                            <path
                                d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                                fill="#ffffff"
                            />
                        </g>
                    </svg>
                    <svg
                        className='cursor-pointer rounded-full hover:bg-[#85763c] duration-200 p-1'
                        width="30px"
                        height="30px"
                        viewBox="0 -2 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">

                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-60.000000, -7521.000000)"
                                    fill="#ffffff"
                                >

                                    <g id="icons" transform="translate(56.000000, 160.000000)">

                                        <path
                                            d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                            id="twitter-[#154]"
                                        >

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg
                        className='cursor-pointer rounded-full hover:bg-[#85763c] duration-200 p-1'
                        width="32px"
                        height="32px"
                        viewBox="0 -3 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >

                                <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-300.000000, -7442.000000)"
                                    fill="#ffffff"
                                >

                                    <g id="icons" transform="translate(56.000000, 160.000000)">

                                        <path
                                            d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                                            id="youtube-[#168]"
                                        >

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg
                        className='cursor-pointer rounded-full hover:bg-[#85763c] duration-200 p-1'
                        width="30px"
                        height="30px"
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >

                                <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-180.000000, -7479.000000)"
                                    fill="#ffffff"
                                >

                                    <g id="icons" transform="translate(56.000000, 160.000000)">

                                        <path
                                            d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                                            id="linkedin-[#161]"
                                        >

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <p className='text-center text-[#848484] text-xs'>COPYRIGHT © 2023 PVR INOX LIMITED. ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;