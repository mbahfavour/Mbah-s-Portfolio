
import React from 'react'

const Project = ({ id, title, description, image, app_url, github_url }) => {
  return (
    <div className='w-full md:w-1/2 xl:w-1/3 px-2 border-primary '>
        <div className='w-full h-full bg-primary text-primary text-center px-4 py-8'>
            <h3 className="mb-4 font-bold text-2xl">{title}</h3>
            <img src={image} alt={title} className='mt-5 md:h-40' />
            <p className='mt-10'>{description}</p>
            <div className='flex justify-evenly mt-10'>
                <div className='border border-primary p-3 flex items-center hover:text-secondary hover:bg-secondary'>
                  <a href={github_url} target="_blank" rel="noreferrer">source code.</a> 
                </div>
                <div className='border border-primary p-3 flex items-center hover:text-secondary hover:bg-secondary '>
                  <a href={app_url} target="_blank" rel="noreferrer">app demo.</a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project