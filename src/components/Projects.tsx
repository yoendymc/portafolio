import React from 'react'
import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import SectionContainer from '@/src/components/SectionContainer'
import IcNextJs from '@/src/icons/IcNextJs'
import IcTailwind from '@/src/icons/IcTailwind'
import IcTagCode from '@/src/icons/IcTagCode'

const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-gray-800 text-white',
    icon: IcNextJs,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: IcTailwind,
  },
}
const PROJECTS = [
  {
    name: 'Blindster',
    url: 'https://www.blindster.com/',
    image: '/images/blindster.png',
    tags: [TAGS.NEXT, TAGS.TAILWIND],
    description:
      'A high-performance e-commerce platform for custom blinds and shades. I worked on the frontend, improving UI/UX and optimizing for mobile and speed.',
  },
  {
    name: 'GeniusCall',
    url: 'https://geniuscall.co/',
    image: '/images/genius.png',
    tags: [TAGS.NEXT, TAGS.TAILWIND],
    description:
      'A video consultation platform connecting users with experts. I developed dynamic dashboards, video call features, and smooth booking flows.',
  },
  {
    name: 'VCMetis',
    url: 'https://vcmetis.com/',
    image: '/images/metis.png',
    tags: [TAGS.NEXT, TAGS.TAILWIND],
    description:
      'Corporate website for a venture capital firm. I built a modern, responsive frontend with interactive components and polished design.',
  },
]

function Projects() {
  return (
    <SectionContainer>
      <h2 className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'>
        <IcTagCode />
        Featured Projects
      </h2>

      <div
        className='flex flex-col gap-y-16'
        id='projects'
      >
        {PROJECTS.map(({ image, name, description, tags, url }) => (
          <article
            className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'
            key={uuid()}
          >
            <div className='w-full md:w-1/2 h-[250px]'>
              <div className='relative overflow-hidden h-full flex flex-col items-center col-span-6 row-span-5 gap-8 shadow-xl overflow-clip rounded-xl sm:rounded-xl'>
                <div
                  className={
                    'absolute transition duration-500 md:scale-105 md:hover:scale-100'
                  }
                >
                  <a
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      alt={name}
                      sizes='(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      width={2972}
                      height={2878}
                      src={image}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full md:w-1/2 md:max-w-lg'>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100 hover:underline'>
                  {name}
                </h3>
              </a>
              <div className='flex flex-wrap mt-2'>
                <ul className='flex flex-row mb-2 gap-x-2'>
                  {tags.map((tag) => (
                    <li key={uuid()}>
                      <span
                        className={`flex items-center gap-x-2.5 rounded-full text-xs ${tag.class} py-1 pl-2 pr-3 `}
                      >
                        {<tag.icon />}
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className='mt-2 text-gray-700 dark:text-gray-400'>
                  {description}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects
