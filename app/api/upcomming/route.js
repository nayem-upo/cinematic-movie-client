import { NextResponse } from "next/server"
const movieData = [
    {
        "id": 1,
        "releasingDate": "Fri Aug 25",
        "movieName": "MY CANDY",
        "language": "English",
        "type": "Action",
        "movieImage": "https://4.bp.blogspot.com/-xVXyfrbV16g/W3OUeEA1SxI/AAAAAAAAGPI/VsKV1bRArFEZ0ixeI2dE4P34VUQSv50lwCLcBGAs/s1600/Create%2Ba%2BMy%2BCandy%2BHorror%2BMovie%2BPoster%2BDesign%2Bin%2BPhotoshop%2BCC.jpg"
    },
    {
        "id": 2,
        "releasingDate": "Sat Sep 10",
        "movieName": "Agent",
        "language": "English",
        "type": "Adventure",
        "movieImage": "https://1.bp.blogspot.com/-WO35H47QREo/WmFaX9YuuFI/AAAAAAAAGHc/oh5L2aCuEGcKuc_jneZQmRofLTO0ATNHwCLcBGAs/s1600/Make%2BCreative%2BMovie%2BPoster%2BWith%2BDark%2Band%2BRed%2BTone%2Bin%2BPhotoshop%2BCC.jpg"
    },
    {
        "id": 3,
        "releasingDate": "Fri Sep 15",
        "movieName": "Samurai Warrior",
        "language": "English",
        "type": "Mystery",
        "movieImage": "https://marketplace.canva.com/EAE-HtAkK7o/1/0/1131w/canva-dark-grey-simple-samurai-warrior-action-movies-promotion-poster-0SiR6y7aypo.jpg"
    },
    {
        "id": 4,
        "releasingDate": "Sat Oct 5",
        "movieName": "Story Castlerock",
        "language": "English",
        "type": "Romance",
        "movieImage": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dramatic-movie-poster-template-design-5d75e35ef878f74977c88e3ff26b0c70_screen.jpg?ts=1636997015"
    },
    {
        "id": 5,
        "releasingDate": "Fri Oct 20",
        "movieName": "Adam Driver",
        "language": "English",
        "type": "Science Fiction",
        "movieImage": "https://cdn-2.cinemaparadiso.co.uk/2306050857181_l.jpg"
    },
    {
        "id": 6,
        "releasingDate": "Sat Nov 2",
        "movieName": "Juares 2045",
        "language": "English",
        "type": "Comedy",
        "movieImage": "https://w0.peakpx.com/wallpaper/781/624/HD-wallpaper-juarez-2045-2017-action-adventure-danny-trejo-movie-poster-sci-fi-thumbnail.jpg"
    },
    {
        "id": 7,
        "releasingDate": "Fri Nov 15",
        "movieName": "Miss Peregrines",
        "language": "English",
        "type": "Fantasy",
        "movieImage": "https://bestsimilar.com/img/movie/thumb/31/27660.jpg"
    },
    {
        "id": 8,
        "releasingDate": "Sat Dec 7",
        "movieName": "The Flesheater",
        "language": "English",
        "type": "Drama",
        "movieImage": "https://blog.spoongraphics.co.uk/wp-content/uploads/2012/horror-poster/horror-movie-poster.jpg"
    },
    {
        "id": 9,
        "releasingDate": "Fri Dec 20",
        "movieName": "마이 네임",
        "language": "Japanies",
        "type": "Horror",
        "movieImage": "https://photos.hancinema.net/photos/photo1374500.jpg"
    },
    {
        "id": 10,
        "releasingDate": "Sat Jan 5",
        "movieName": "Don't Say My Name",
        "language": "English",
        "type": "Animation",
        "movieImage": "https://townsquare.media/site/385/files/2021/10/attachment-dont-say-my-name-movie-poster.jpg?w=980&q=75"
    },
    {
        "id": 11,
        "releasingDate": "Fri Jan 20",
        "movieName": "Geeta Sakshigaa",
        "language": "Hindi",
        "type": "Family",
        "movieImage": "https://ottarasan.com/wp-content/uploads/2022/09/geeta-sakshigaa.jpg"
    },
    {
        "id": 12,
        "releasingDate": "Sat Feb 8",
        "movieName": "Knights of the Zodiac",
        "language": "English",
        "type": "Musical",
        "movieImage": "https://i.ebayimg.com/images/g/RvwAAOSwCW1kRfnN/s-l1200.webp"
    }
]

export const GET = () => {
    return NextResponse.json(movieData)
}