import React from 'react'
import SimpleCarousel from '../components/SimpleCarousel'
import ServiceCards from '../components/ServiceCards'

const Home = () => {
  return (
    <div className='container'>
      <SimpleCarousel/>
        <ServiceCards/>
    </div>
  )
}

export default Home
