
import './App.css'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import TeamSection from './components/TeamSection '
import Testimonials from './components/Testimonials '
import TimelineSection from './components/TimelineSection '

export default function App() {
  return (
   
    <div className="bg-black text-white  ">
   <Header/>
   <HeroSection/>
   <GallerySection/>
   <StatsSection/>
   <TimelineSection/>
   <TeamSection/>
   <Testimonials/>
   <Footer/>
  </div>
  )
}
