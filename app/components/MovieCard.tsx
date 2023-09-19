'use client'
import React from 'react';
import Link from 'next/link';
interface MovieType {
    id: number;
    movieName: string;
    releaseDate: string;
    language: string;
    movieImage: string;
    likes: number;
}

function formatLikes(likes: number): string {
    if (likes >= 1000) {
        return (likes / 1000).toFixed(1) + ' k';
    } else {
        return likes.toString();
    }
}

const MovieCard = ({ movie }) => {
    const { movieName, releaseDate, language, movieImage, likes, id } = movie;

    const formattedReleaseDate = new Date(releaseDate).toLocaleDateString();

    return (
        <div className="example-2 card mx-auto">
            <div className="wrapper duration-300 hover:scale-105" style={{ backgroundImage: `url(${movieImage})` }}>
                <div className="header">
                    <div className="date bg-[#FCCB08] text-black font-semibold px-3 py-1 rounded">
                        <span className="day">{formattedReleaseDate}</span>
                    </div>
                    <ul className="menu-content bg-[#00000074] rounded">
                        <li>🤍{formatLikes(likes)}</li>
                    </ul>
                </div>
                <div className="data bg-[#00000071]">
                    <div className="content">
                        <span className="author font-semibold bg-[#FCCB08] text-black py-[2px] px-2 rounded">{language}</span>
                        <h1 className="title text-base"><a href="#">{movieName}</a></h1>
                        <Link href={`/details/${id}`} className="button hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150">BOOK TICKET</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
