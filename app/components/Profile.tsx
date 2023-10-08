import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
    const { user } = useUser();
    // console.log(user);
    return (
        <div className='flex gap-8 mx-10'>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <img draggable="false" className='h-36 w-36 rounded-full object-cover' src={user?.imageUrl} alt="" />
                <Link target='_blank' href="/user-profile">
                    <button className="button hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-4 py-[8px] rounded duration-150">Update Profile</button>
                </Link>
            </div>
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-[#FCCB08]'>Full Name: </p>
                    <p className='text-lg'>{user?.fullName}</p>
                </div>
                <div>
                    <p className='text-[#FCCB08]'>Email Address: </p>
                    <p className='text-lg'>{user?.primaryEmailAddress?.emailAddress}</p>
                </div>
                <div>
                    <p className='text-[#FCCB08]'>User Id: </p>
                    <p className='text-lg'>{user?.id}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;