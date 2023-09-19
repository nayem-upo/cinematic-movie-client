"use client"
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

type MovieType = {
    id: number;
    movieName: string;
    releaseDate: string;
    language: string;
    movieImage: string;
    likes: number
};

const ShowingMovies = () => {
    const [newMovies, setNewMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/running");
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
                <h1 className='text-2xl text-white py-6'>NOW SHOWING</h1>
                <div>
                    <select className="bg-[#3B3B3B] w-[180px] text-xs text-white outline-none px-2 py-[10px] rounded-md">
                        <option >LANGUAGE</option>
                        <option>ENGLISH</option>
                        <option>HINDI</option>
                        <option>BANGLA</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-y-10 justify-center items-center">
                {newMovies.map((movie: MovieType) => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default ShowingMovies;
