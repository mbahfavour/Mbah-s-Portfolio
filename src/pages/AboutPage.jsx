import React from 'react'
import Divider from '../components/Divider'
import Footer from '../components/Footer'


const AboutPage = () => {
  return (
    <div className=' mt-20 h-screen font-univers'>
      <div className='flex items-center justify-center font-extrabold'>
        <h1 className='text-3xl'>
          about. me.
        </h1>
      </div>
      <Divider />
      <div className='flex items-center justify-center mt-7 px-40'>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>
      </div>
      <div className='mt-[240px]'>
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage