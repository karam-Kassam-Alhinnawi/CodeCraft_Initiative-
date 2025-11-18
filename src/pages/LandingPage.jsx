import React from 'react'
import Hero from '../components/landingPage/Hero/Hero'
import AboutUs from '../components/landingPage/AboutUs/AboutUs'
import Testimonials from '../components/Testimonials/Testimonials'
import Stats from '../components/landingPage/Stats/Stats'
import CoursesPrev from '../components/landingPage/courses/CoursesPrev'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Stats />
        <Testimonials/>
        <CoursesPrev/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default LandingPage