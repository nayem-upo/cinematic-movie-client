'use client'
import React from 'react';
import Link from 'next/link';
interface MovieType {
    likes: number;
    movieName: string;
    id: number;
    trailerLink: string;
    movieImage: string;
    releaseDate: string;
    language: string;
    type: string;
    totalTicketPrice: number;
    quantity: number;
    bookingDate: string;
    userEmail: string;
    releasingDate: any;
}
interface MovieCardProps {
    movie: MovieType;
}

function formatLikes(likes: number): string {
    if (likes >= 1000) {
        return (likes / 1000).toFixed(1) + ' k';
    } else {
        return likes.toString();
    }
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { movieName, releaseDate, language, movieImage, likes, id, trailerLink } = movie;

    const formattedReleaseDate = new Date(releaseDate).toLocaleDateString();
    return (
        <div className="example-2 card mx-auto">
            <div className="wrapper duration-300 hover:scale-105 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${movieImage})` }}>
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
                        <div className='flex justify-between'>
                            <Link href={`/details/${id}`} className="button hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-4 py-[8px] rounded duration-150">BOOK TICKET</Link>
                            <button
                                onClick={() => {
                                    const movieElement = document.getElementById(`${movie.id + "modal3"}`) as HTMLDialogElement | null;
                                    if (movieElement) {
                                        movieElement.showModal();
                                    }
                                }}
                                className="button hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-4 py-[8px] rounded duration-150"
                            >
                                Play Trailer
                            </button>
                        </div>
                    </div>

                    <dialog id={movie.id + "modal3"} className="modal bg-[#000000a3]">
                        <div className="">
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className='absolute -ms-5 -mt-5'>
                                        <svg
                                            width="40px"
                                            height="40px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <circle cx={12} cy={12} r={10} stroke="#ffc800" strokeWidth="1.5" />{" "}
                                                <path
                                                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                                    stroke="#ffc800"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />{" "}
                                            </g>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <iframe width="920" height="515"
                                src={trailerLink} >
                            </iframe>

                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
