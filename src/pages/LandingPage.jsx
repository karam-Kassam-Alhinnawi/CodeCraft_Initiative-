import React from 'react'
import Hero from '../components/landingPage/Hero/Hero'
import AboutUs from '../components/landingPage/AboutUs/AboutUs'
import Testimonials from '../components/Testimonials/Testimonials'
import Stats from '../components/landingPage/Stats'
import CoursesPrev from '../components/landingPage/courses/CoursesPrev'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Stats/>
        <Testimonials/>
        <CoursesPrev/>
    </div>
  )
}

export default LandingPage