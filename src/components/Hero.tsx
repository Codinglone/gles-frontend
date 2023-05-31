import React from 'react'
import graduates from "../assets/graduates.avif"

const Hero = () => {
  return (
    <section className='h-[100vh] bg-cover bg-no-repeat ' style={{backgroundImage: `url(${graduates})`}}>
        <h1>Hero Section</h1>
    </section>
  )
}

export default Hero