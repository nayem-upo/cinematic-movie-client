"use client"
import React, { useEffect, useState } from 'react';
import CommingCard from './CommingCard';
interface MovieType {
    _id: string;
    id: number;
    movieName: string;
    movieImage: string;
    releaseDate: string;
    language: string;
    type: string;
    totalTicketPrice: number;
    quantity: number;
    bookingDate: string;
    userEmail: string;
    releasingDate: any;
    trailerLink: string;
}


const CommingMovies = () => {
    const [newMovies, setNewMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://cinematic-movie-server.vercel.app/upcommingcinemas");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setNewMovies(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='mx-auto pb-20'>
            <div className='flex justify-between mx-[33px] items-center'>
                <h1 className='md:text-2xl text-xl text-white py-6'>COMING SOON</h1>
            </div>
            <div className="grid md:grid-cols-4 md:gap-y-10 gap-y-12 my-5 md:my-0 justify-center items-center">
                {newMovies.map((movie: MovieType) => (
                    <CommingCard key={movie.id} movie={movie}></CommingCard>
                ))}
            </div>
        </div>
    );
};

export default CommingMovies;