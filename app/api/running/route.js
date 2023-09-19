import { NextResponse } from "next/server"
const movieData = [
    {
        "id": 1,
        "releaseDate": "2023-08-25",
        "movieName": "Mafia",
        "language": "English",
        "likes": 1500,
        "movieImage": "https://e1.pxfuel.com/desktop-wallpaper/182/804/desktop-wallpaper-mafia-south-movie-poster-thumbnail.jpg"
    },
    {
        "id": 2,
        "releaseDate": "2023-09-12",
        "movieName": "Secrets of the Jungle",
        "language": "Spanish",
        "likes": 1200,
        "movieImage": "https://images.static-bluray.com/products/20/110715_1_large.jpg"
    },
    {
        "id": 3,
        "releaseDate": "2023-09-18",
        "movieName": "Epic Space Odyssey",
        "language": "English",
        "likes": 2000,
        "movieImage": "https://m.media-amazon.com/images/I/51GKmxLYOWL.jpg"
    },
    {
        "id": 4,
        "releaseDate": "2023-10-05",
        "movieName": "Romantic Retreat",
        "language": "French",
        "likes": 800,
        "movieImage": "https://m.media-amazon.com/images/M/MV5BMjVkMzZmMWEtNjUyMi00MWJlLTg0NDYtN2MzMDQxNWY2MWIxXkEyXkFqcGdeQXVyMTQyNDk2NzE@._V1_.jpg"
    },
    {
        "id": 5,
        "releaseDate": "2023-10-20",
        "movieName": "Mystery in the Mountains",
        "language": "English",
        "likes": 1700,
        "movieImage": "https://m.media-amazon.com/images/M/MV5BMjE4Mzk0MDU2NV5BMl5BanBnXkFtZTcwOTI5MzI4Nw@@._V1_.jpg"
    },
    {
        "id": 6,
        "releaseDate": "2023-11-08",
        "movieName": "Bhediya",
        "language": "German",
        "likes": 2200,
        "movieImage": "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2022/bhediya/bhediya-poster-6.jpg"
    },
    {
        "id": 7,
        "releaseDate": "2023-11-22",
        "movieName": "Kraven the Hunter",
        "language": "English",
        "likes": 1000,
        "movieImage": "https://m.media-amazon.com/images/M/MV5BZWNhOWY4OTUtNDIwZC00ZTMzLTgzNDgtZGU5OWM0ODcwYmVlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
    },
    {
        "id": 8,
        "releaseDate": "2023-12-10",
        "movieName": "Historical Heroes",
        "language": "Spanish",
        "likes": 1300,
        "movieImage": "https://hips.hearstapps.com/hmg-prod/images/best-historical-movies-dunkirk-1655310902.png"
    }
]

export const GET = () => {
    return NextResponse.json(movieData)
}