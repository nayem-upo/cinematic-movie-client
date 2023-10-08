import React from 'react';
import Swal from 'sweetalert2';
interface Ticket {
    _id: string;
    movieName: string;
    movieImage: string;
    releaseDate: string;
    language: string;
    type: string;
    totalTicketPrice: number;
    quantity: number;
    bookingDate: string;
    userEmail: string;
}

const TicketCard: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
    const date = new Date(ticket.bookingDate);
    const formattedDate = date.toLocaleDateString();
    // console.log(ticket.type);
    const updatedTicket = {
        movieName: ticket.movieName,
        movieImage: ticket.movieImage,
        releaseDate: ticket.releaseDate,
        language: ticket.language,
        type: "Pending",
        bookingDate: ticket.bookingDate,
        userEmail: ticket.userEmail,
        quantity: ticket.quantity,
        totalTicketPrice: ticket.totalTicketPrice,
    }
    const handleRefund = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "If you want to refund then send a refund request!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Send Request'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/selectedmovies/${ticket._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedTicket),
                })
                    .then((response) => {
                        if (response.ok) {
                            // Update was successful
                            return response.json();
                        } else {
                            // Handle the case where the update failed
                            throw new Error('Failed to update the resource');
                        }
                    })
                    .then((data) => {
                        // Handle success (e.g., show success message)
                        Swal.fire(
                            'Congratulations!',
                            'Your request has been sent successfully!',
                            'success'
                        );
                    })
                    .catch((error) => {
                        // Handle any errors that occurred during the fetch
                        console.error('Error:', error);
                        Swal.fire(
                            'Error!',
                            'Failed to update the resource',
                            'error'
                        );
                    });

            }
        })
    }
    return (
        <div className="flex flex-wrap -m-4">
            <div className="p-5 w-full">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4"
                        src={ticket?.movieImage}
                    />
                    <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-[#FCCB08]">{ticket?.movieName}</h2>
                        <h3 className="text-[#FCCB08] mb-2">{ticket.language} Movie</h3>
                        <div>
                            <p>Quantity: {ticket.quantity}</p>
                            <div className='flex gap-5'>
                                <h1>Total Price: ${ticket.totalTicketPrice}</h1>
                                <h1>Booking Date: {formattedDate}</h1>
                            </div>
                        </div>
                    </div>
                    <button disabled={ticket.type !== 'Refund'} onClick={handleRefund}
                        className={`${ticket.type === 'Pending'
                            ? 'text-pink-500'
                            : ticket.type === 'Refunded'
                                ? 'text-green-500'
                                : 'text-black'
                            } disabled:hover:bg-white hover:bg-[#FCCB08] bg-white text-xs font-semibold uppercase px-4 py-[8px] rounded duration-150`}

                    >{ticket.type}</button>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;