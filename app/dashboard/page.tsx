"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import TicketCard from '../components/TicketCard';
import { useUser } from '@clerk/nextjs';
import Profile from '../components/Profile';


interface CommonTicketProps {
    movieName: string;
    movieImage: string;
    releaseDate: string;
    language: string;
    type: string;
}

interface Movie extends CommonTicketProps {
    id: string;
    price: number;
}

interface Ticket extends CommonTicketProps {
    _id: string;
    totalTicketPrice: number;
    quantity: number;
    bookingDate: string;
    userEmail: string;
}


const page = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const { user } = useUser();
    const [tab, setTab] = useState<number>(1);
    useEffect(() => {
        fetch(`https://cinematic-movie-server.vercel.app/selectedmovies/${user?.primaryEmailAddress?.emailAddress}`)
            .then(res => res.json())
            .then((data: Ticket[]) => setTickets(data));
    }, [tickets]);
    // console.log(tickets)
    return (
        <div>
            <Header />
            <div className="sm:py-12 text-white mx-20">
                <section className="mx-auto space-y-8">
                    <div className="container flex flex-row items-stretch justify-center w-full max-w-4xl space-x-12">
                        <ul className="flex flex-col justify-start space-y-4">
                            <li
                                className={`cursor-pointer px-4 py-2 text-sm ${tab === 1 ? 'z-20 border-l-2 transform translate-x-2 border-[#FCCB08] font-bold' : 'transform -translate-x-2'}`}

                                onClick={() => setTab(1)}
                            >
                                My Profile
                            </li>
                            <li
                                className={`cursor-pointer px-4 py-2 text-sm ${tab === 2 ? 'z-20 border-l-2 transform translate-x-2 border-[#FCCB08] font-bold' : 'transform -translate-x-2'}`}

                                onClick={() => setTab(2)}
                            >
                                My Tickets
                            </li>
                            <li
                                className={`cursor-pointer px-4 py-2 text-sm ${tab === 4 ? 'z-20 border-l-2 transform translate-x-2 border-[#FCCB08] font-bold' : 'transform -translate-x-2'}`}

                                onClick={() => setTab(4)}
                            >
                                My Wishlist
                            </li>
                            <li
                                className={`cursor-pointer px-4 py-2 text-sm ${tab === 5 ? 'z-20 border-l-2 transform translate-x-2 border-[#FCCB08] font-bold' : 'transform -translate-x-2'}`}

                                onClick={() => setTab(5)}
                            >
                                Subscription
                            </li>

                            <li
                                className={`cursor-pointer px-4 py-2 text-sm ${tab === 7 ? 'z-20 border-l-2 transform translate-x-2 border-[#FCCB08] font-bold' : 'transform -translate-x-2'}`}

                                onClick={() => setTab(7)}
                            >
                                My Refund
                            </li>
                        </ul>
                        <div className="">
                            <div className="space-y-6 w-[800px]" style={{ display: tab === 1 ? 'block' : 'none' }}>
                                <h3 className="text-xl uppercase font-bold leading-tight">
                                    MY PROFILE
                                </h3>
                                <p className="text-base p-[0.4px] bg-gray-600"></p>
                                <Profile />
                            </div>

                            <div className="space-y-6 w-[800px]" style={{ display: tab === 2 ? 'block' : 'none' }}>
                                <h3 className="text-xl uppercase font-bold leading-tight">
                                    My Tickets
                                </h3>
                                <p className="text-base p-[0.4px] bg-gray-600"></p>
                                <div className=''>
                                    {
                                        tickets.length === 0 && <p className="text-xl">
                                            No Tickets to show!
                                        </p>
                                    }
                                    {
                                        tickets.map((ticket: Ticket) => <TicketCard ticket={ticket} key={ticket._id}></TicketCard>)
                                    }
                                </div>
                            </div>
                            <div className="space-y-6 w-[800px]" style={{ display: tab === 4 ? 'block' : 'none' }}>
                                <h3 className="uppercase text-xl font-bold leading-tight">
                                    My Wishlist
                                </h3>
                                <p className="text-base p-[0.4px] bg-gray-600"></p>
                                <p className="text-xl">
                                    Coming soon ...
                                </p>
                            </div>
                            <div className="space-y-6 w-[800px]" style={{ display: tab === 5 ? 'block' : 'none' }}>
                                <h3 className="text-xl uppercase font-bold leading-tight">
                                    My Subscription
                                </h3>
                                <p className="text-base p-[0.4px] bg-gray-600"></p>
                                <p className="text-xl">
                                    Coming soon ...
                                </p>
                            </div>

                            <div className="space-y-6 w-[800px]" style={{ display: tab === 7 ? 'block' : 'none' }}>
                                <h3 className="text-xl uppercase font-bold leading-tight">
                                    My Refund
                                </h3>
                                <p className="text-base p-[0.4px] bg-gray-600"></p>
                                <p className="text-xl">
                                    Coming soon ...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <MenuBar />
        </div>
    );
};

export default page;