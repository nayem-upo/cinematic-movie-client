"use client"
import Header from '@/app/components/Header';
import MenuBar from '@/app/components/MenuBar';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

interface PageProps {
    params: {
        id: string;
    };
}

interface Movie {
    id: string;
    movieName: string;
    movieImage: string;
    releaseDate: string;
    language: string;
    type: string;
    price: number;
}

const Page: React.FC<PageProps> = ({ params }) => {
    const [data, setData] = useState<Movie[]>([]);
    const { user } = useUser();
    const email = user?.primaryEmailAddress?.emailAddress;
    const [count, setCount] = useState(1);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [totalTicketPrice, setTotalTicketPrice] = useState(0);
    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:5000/runningcinemas')
            .then(res => res.json())
            .then((data: Movie[]) => setData(data));
    }, []);
    const movie = data.find(m => m.id == params.id);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const movieObject = {
        movieName: movie?.movieName,
        movieImage: movie?.movieImage,
        releaseDate: movie?.releaseDate,
        language: movie?.language,
        type: "Refund",
        bookingDate: currentDateTime,
        userEmail: email,
        quantity: count,
        totalTicketPrice: totalTicketPrice
    }

    const showModal = () => {
        if (movie?.id) {
            setTotalTicketPrice(movie.price || 0);
            const modal = document.getElementById(`${movie.id}`)! as HTMLDialogElement;
            modal.showModal();
        }
    }

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
            setTotalTicketPrice(totalTicketPrice + (movie?.price || 0));
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            setTotalTicketPrice(totalTicketPrice - (movie?.price || 0));
        }
    }


    const postCinema = () => {
        if (!user) {
            if (movie?.id) {
                const modal = document.getElementById(`${movie.id}`)! as HTMLDialogElement;
                modal.close();
            }
            Swal.fire({
                title: 'Please login',
                text: "You can not book a ticket without log in!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in!'
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login');
                }
            })
        }
        else {
            fetch("http://localhost:5000/selectedmovies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(movieObject),
            })
                .then((response) => {
                    if (movie?.id) {
                        const modal = document.getElementById(`${movie.id}`)! as HTMLDialogElement;
                        modal.close();
                    }
                    Swal.fire(
                        'Congratulations!',
                        'Successfully booked ticket',
                        'success'
                    )

                })
                .catch((error) => {
                });
        }
    }

    // console.log(movie);

    return (
        <div>
            <Header />
            <div className='bg-[#080808] max-w-7xl mx-auto min-h-full'>
                <div className="py-5 px-20 flex flex-col">
                    <div className='bg-[#FBD158] relative'>
                        <img className='w-[300px] h-[400px] mx-auto relative blur-shadow shadow-2xl' src={movie?.movieImage} alt="" />
                        <div className='absolute bottom-5 left-10'>
                            <h1 className='text-3xl font-semibold'>{movie?.movieName}</h1>
                            <p>{movie?.releaseDate} ● {movie?.language}</p>
                        </div>
                        <p className='absolute text-lg font-semibold bottom-5 right-10'>Price: ${movie?.price}</p>
                    </div>

                    <button onClick={showModal} className="button mx-auto my-5 hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150">BOOK TICKET</button>
                </div>
                <dialog id={movie?.id} className="modal z-0 bg-[#0000006e]">
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
                        <div className='w-[650px] rounded-md bg-black border-[0.4px]'>
                            <h1 className='text-[#FCCB08] p-5 text-center text-3xl'>Check out our Super Saver Offer!</h1>
                            <div className='bg-[#FBD158] relative'>
                                <img className='w-[160px] object-cover h-[250px] mx-auto relative blur-shadow shadow-2xl' src={movie?.movieImage} alt="" />
                            </div>
                            <div className='grid grid-cols-3 py-5 bg-[#202020] text-center'>
                                <div>
                                    <p className='text-white font-semibold'>Ticket Quantity</p>
                                    <div className="">
                                        <button
                                            className="w-5 text-center bg-[#FCCB08] rounded-full hover:bg-[#ffc037]"
                                            onClick={decrement}
                                        >
                                            -
                                        </button>
                                        <span className="mx-2 text-xl font-bold text-white">{count}</span>
                                        <button
                                            className="w-5 text-center bg-[#FCCB08] duration-150 rounded-full hover:bg-[#ffc037]"
                                            onClick={increment}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className='text-white font-semibold'>
                                    <p>Ticket Price</p>
                                    <p className='text-[#FCCB08] text-lg'>${movie?.price}</p>
                                </div>
                                <div className='text-white font-semibold'>
                                    <p>Total Price</p>
                                    <p className='text-[#FCCB08] text-lg'>${totalTicketPrice}</p>
                                </div>
                            </div>
                            <div className='bg-[#202020] pt-5 flex flex-col justify-center'>
                                <p className='bg-[#fcfcfc] w-[90%] mx-auto p-[0.4px]'></p>
                                <button onClick={postCinema} className="button mx-auto my-5 hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150">BUY TICKET</button>
                            </div>
                        </div>

                    </div>
                </dialog>
            </div>
            <MenuBar />
        </div>
    );
};

export default Page;
