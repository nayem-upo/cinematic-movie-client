import React from 'react';

const getMovie = async () => {
    const res = await fetch('http://localhost:3000/api/running')

    if (!res.ok) throw new Error("Failed to fetch")

    return res.json()
};

export default getMovie;