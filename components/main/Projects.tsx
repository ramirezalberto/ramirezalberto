import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src="/NextWebsite.png"
          title="Choosing the Right Visualization Chart — Part 1 Distributions"
          description="Facing with the task of presenting or exploring data, but you’re not sure which chart type to use?"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Choosing the Right Visualization Chart — Part 2 Comparison"
          description="Whether you’re a data analyst, a student, or anyone working with data"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Choosing the Right Visualization Chart — Part 3 Relationship"
          description="Selecting the right visualization chart can make a significant difference in how effectively your information is conveyed"
        />
      </div>
    </div>
  )
}

export default Projects
