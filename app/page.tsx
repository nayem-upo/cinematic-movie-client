import Header from './components/Header'
import CaroselBanner from './components/CaroselBanner'
import MenuBar from './components/MenuBar'
import IntroducingBanner from './components/IntroducingBanner'
import ShowingMovies from './components/ShowingMovies'
import Footer from './components/Footer'
import CommingMovies from './components/CommingMovies'

const Home = async () => {
  return (
    <main className='bg-[#080808] max-w-7xl mx-auto'>
      <Header></Header>
      <CaroselBanner></CaroselBanner>
      <IntroducingBanner></IntroducingBanner>
      <ShowingMovies></ShowingMovies>
      <CommingMovies></CommingMovies>
      <Footer></Footer>
      <MenuBar></MenuBar>
    </main>
  )
}

export default Home;