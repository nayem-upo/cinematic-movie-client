

const CommingCard = ({ movie }) => {
    const { movieName, releasingDate, language, movieImage, type } = movie;

    return (
        <div>
            <div className="example-2 card mx-auto">
                <div className="wrapper duration-300 hover:scale-105" style={{ backgroundImage: `url(${movieImage})` }}>
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
                            <h1 className="title text-base font-semibold"><a href="#">{movieName}</a></h1>
                            <h1 className="uppercase text-xs py-2">{language} ● {type}</h1>
                            <h1 className="uppercase text-xs py-1">Releasing on {releasingDate}</h1>
                            
                            <div className="flex items-center text-center justify-between mt-[38px]">
                                <a href="#" className="hover:bg-[#FCCB08] w-[104px] bg-white text-black text-xs font-semibold uppercase text-center py-[6px] rounded duration-150">SHOW INFO</a>
                                <a href="#" className="hover:bg-[#FCCB08] w-[104px] bg-white text-black text-xs font-semibold uppercase text-center py-[6px] rounded duration-150">PLAY TRAILER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommingCard;