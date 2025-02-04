import React from 'react'
import { Navbar, HeroSection, AboutUs, Features, Companies, Prices, CallToAction, Footer} from '../components'


const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Features />
        <Companies />
        <Prices />
        <CallToAction />
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </>

  )
}

export default LandingPage