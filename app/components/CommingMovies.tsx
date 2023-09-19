"use client"
import React, { useEffect, useState } from 'react';
import CommingCard from './CommingCard';
interface MovieType {
    id: number;
    releasingDate: string;
    movieName: string;
    language: string;
    type: string;
    movieImage: string;
}

const CommingMovies = () => {
    const [newMovies, setNewMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/upcomming");
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
                <h1 className='text-2xl text-white py-6'>COMING SOON</h1>
            </div>
            <div className="grid grid-cols-4 gap-y-10 justify-center items-center">
                {newMovies.map((movie: MovieType) => (
                    <CommingCard key={movie.id} movie={movie}></CommingCard>
                ))}
            </div>
        </div>
    );
};

export default CommingMovies;