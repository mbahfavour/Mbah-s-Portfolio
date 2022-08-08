import React from 'react'
import Divider from '../components/Divider'
import { MdOutlineConstruction } from 'react-icons/md'

const Blogs = () => {
  return (
    <div className='mt-20 font-univers'>
      <div className='flex items-center justify-center font-extrabold'>
        <h1 className='text-3xl'>
          blogs.
        </h1>
      </div>
      <Divider />
      <div className='flex items-center justify-center mt-20 md:mt-40'>
        <MdOutlineConstruction size={22} />
        <h2 className='text-xl ml-3'>Under Construction</h2>
      </div>
    </div>
  )
}

export default Blogs