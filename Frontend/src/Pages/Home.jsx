import React from 'react'
import Welcome from '../components/Welcome'
import Sectiontoo from '../components/Sectiontoo'
import Aboutus from '../components/Aboutus'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Oct from '../components/Oct'

function Home() {
    return (
        <>
            <Welcome />
            <Sectiontoo />
            <Aboutus />
            <Features />
            <Oct/>
            <Testimonial />
        </>
    )
}

export default Home