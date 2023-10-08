"use client"
import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SignUp } from '@clerk/nextjs';

const page = () => {
    return (
        <div>
            <Header></Header>
            <SignUp/>
            <MenuBar></MenuBar>
        </div>
    );
};

export default page;