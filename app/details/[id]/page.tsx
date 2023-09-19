"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface PageProps {
    params: {
        id: string;
    };
}

interface Movie {
    id: string;
    movieName: string;
    movieImage: string;
}

const Page: React.FC<PageProps> = ({ params }) => {
    const [data, setData] = useState<Movie[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/running')
            .then(res => res.json())
            .then((data: Movie[]) => setData(data));
    }, []);

    const movie = data.find(m => m.id == params.id); console.log(movie);
    return (
        <div className='bg-[#080808] max-w-7xl mx-auto min-h-full'>
            <div className="py-5 px-20 flex flex-col">
                <div className='bg-[#FBD158] relative'>
                    <img className='w-[300px] h-[400px] mx-auto relative blur-shadow shadow-2xl' src={movie?.movieImage} alt="" />
                    <div className='absolute bottom-5 left-10'>
                        <h1 className='text-3xl font-semibold'>{movie?.movieName}</h1>
                        <p>{movie?.releaseDate} ● {movie?.language}</p>
                    </div>
                </div>
                <button className="button mx-auto my-5 hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150">BOOK TICKET</button>
            </div>
        </div>
    );
};

export default Page;
