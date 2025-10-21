import React from 'react'
import { v4 as uuid } from 'uuid'

interface Props {
  title: string
  company: string
  description: Array<string>
  date: string
}

function ExperienceItem({ title, company, description, date }: Props) {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
      <div className='relative pb-12 md:col-span-2'>
        <div className='sticky top-0'>
          <span className='text-yellow-400 -left-[42px] absolute rounded-full text-5xl'>
            &bull;
          </span>

          <h3 className='text-xl font-bold text-yellow-400'>{title}</h3>
          <h4 className='font-semibold text-xl text-gray-600 dark:text-white'>
            {company}
          </h4>
          <time className='p-0 m-0 text-sm text-gray-600/80 dark:text-white/80'>
            {date}
          </time>
        </div>
      </div>
      <ul className='relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3 [&>li]:text-pretty list-disc'>
        {description?.map((d) => <li key={uuid()}>{d}</li>)}
      </ul>
    </div>
  )
}

export default ExperienceItem
