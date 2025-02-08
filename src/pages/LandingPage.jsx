import React from 'react'
import { Navbar, HeroSection, AboutUs, Features, Prices, CallToAction, Footer,  Newsletter, Team} from '../components'


const LandingPage = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Team />
        <Features />
        <CallToAction />
        <Newsletter />
        <Prices />
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </>

  )
}

export default LandingPage