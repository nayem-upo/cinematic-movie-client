interface Movie {
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
interface CommingCardProps {
    movie: Movie;
}

const CommingCard: React.FC<CommingCardProps> = ({ movie }) => {
    const { movieName, releasingDate, language, movieImage, type, id, trailerLink } = movie;

    return (
        <div>
            <div className="example-2 card mx-auto">
                <div className="wrapper min-h-[320px] duration-300 hover:scale-105 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${movieImage})` }}>
                    <div className="header">
                        <ul className="menu-content">
                            <li>
                                <svg
                                    className="rounded cursor-pointer hover:fill-[#FCCB08]"
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                                            stroke="#ffffff"
                                            strokeWidth={3}
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>

                            </li>
                        </ul>
                    </div>
                    <div className="data bg-[#00000071]">
                        <div className="content">
                            {/* <span className="author font-semibold bg-[#FCCB08] text-black py-[2px] px-2 rounded">{language}</span> */}
                            <h1 className="title text-base font-semibold">{movieName}</h1>
                            <h1 className="uppercase text-xs py-2">{language} ● {type}</h1>
                            <h1 className="uppercase text-xs py-1">Releasing on {releasingDate}</h1>

                            <div className="flex items-center text-center justify-between mt-[38px]">
                                <button
                                    onClick={() => {
                                        const modalElement = document.getElementById(id + "modal1") as HTMLDialogElement | null;
                                        if (modalElement) {
                                            modalElement.showModal();
                                        }
                                    }}
                                    className="hover:bg-[#FCCB08] w-[104px] bg-white text-black text-xs font-semibold uppercase text-center py-[6px] rounded duration-150"
                                >
                                    SHOW INFO
                                </button>

                                <button
                                    onClick={() => {
                                        const modalElement = document.getElementById(id + "modal2") as HTMLDialogElement | null;
                                        if (modalElement) {
                                            modalElement.showModal();
                                        }
                                    }}
                                    className="hover:bg-[#FCCB08] w-[104px] bg-white text-black text-xs font-semibold uppercase text-center py-[6px] rounded duration-150">PLAY TRAILER</button>
                            </div>
                        </div>
                    </div>
                </div>

                <dialog id={id + "modal1"} className="modal bg-[#000000b1] text-white">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="absolute right-2 top-2">
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
                        <div className="rounded-lg mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full h-72 object-cover object-center rounded"
                                src={movieImage}
                            />
                            <div className="lg:w-1/2 flex flex-col gap-4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="title-font racking-widest">
                                    <p>Language: {language}</p>
                                </h2>
                                <h1 className="text-3xl text-[#FCCB08] title-font font-medium mb-1">
                                    {movieName}
                                </h1>
                                <div>
                                    <p>Will Release On {releasingDate}</p>
                                    <p>Movie Type: {type}</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="title-font font-medium text-lg">Coming Soon</span>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-[#FCCB08] duration-150 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
                <dialog id={id + "modal2"} className="modal bg-[#000000c2]">
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
    );
};

export default CommingCard;