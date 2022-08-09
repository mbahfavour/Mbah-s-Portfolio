import React from 'react'
import Divider from '../components/Divider'
import Project from '../components/Project'


const ProjectsPage = ({ projects }) => {
  return (
    <div className='mt-20 font-univers'>
      <div className='flex items-center justify-center font-extrabold'>
        <h1 className='text-3xl'>
          featured. projects.
        </h1>
      </div>
      <Divider />
      <div className="container mx-auto px-7 sm:px-0">
        <div className='flex flex-wrap'>
          {projects.map((project) => {
            return(
              <Project key={project.id} image={project.image} {...project}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage