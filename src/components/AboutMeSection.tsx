import React from 'react'
import { FaFigma, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import Image from 'next/image'
import SectionContainer from '@/src/components/SectionContainer'
import IcPerson from '@/src/icons/IcPerson'

const techStack = [
  { name: 'React', icon: <FaReact className='text-blue-400' /> },
  { name: 'Next.js', icon: <SiNextdotjs className='text-white' /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-teal-400' /> },
  { name: 'TypeScript', icon: <SiTypescript className='text-blue-500' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
  { name: 'MongoDB', icon: <SiMongodb className='text-green-400' /> },
  { name: 'GitHub', icon: <FaGithub className='text-white' /> },
  { name: 'Vercel', icon: <SiVercel className='text-white' /> },
  { name: 'Figma', icon: <FaFigma className='text-pink-500' /> },
]

function AboutMeSection() {
  return (
    <SectionContainer>
      <h2 className='text-3xl font-bold mb-4 flex gap-x-2'>
        <IcPerson /> About Me
      </h2>
      <article
        className='flex flex-col items-center md:items-start justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row'
        id={'about'}
      >
        <div className='text-lg [&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1'>
          <p className='text-gray-300 mb-4'>
            {`I'm Yoendy Martínez Contreras , a software engineer with a strong
              foundation in full-cycle software development. My journey began in
              high school and evolved through earning a degree in `}
            <strong>Computer Science Engineering</strong>, where I developed a
            deep understanding of algorithms, system architecture, and software
            design.
          </p>
          <p className='text-gray-300 mb-6'>
            I specialize in{' '}
            <strong>JavaScript and modern web technologies</strong>, building
            high-performance applications using tools like{' '}
            <strong>React, Next.js, and Node.js</strong>. I enjoy solving
            complex problems, collaborating with others, and continuously
            improving as a developer and team leader.
          </p>
          <h3 className='text-xl font-semibold mb-3'>Tech Stack</h3>
          <div className='grid grid-cols-3 sm:grid-cols-4 gap-6'>
            {techStack.map((tech, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center gap-1 w-full'
              >
                <div className='text-2xl'>{tech.icon}</div>
                <span className='text-sm text-gray-300'>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center items-center w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 '>
          <div className='rounded-lg overflow-hidden shadow-lg w-60 h-60 relative'>
            <Image
              src='/images/yoendy_M.jpg'
              alt='Yoendy Martínez Contreras'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

export default AboutMeSection
