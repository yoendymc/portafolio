import React from 'react'

function ListContact() {
  return (
    <div className={'mt-4 space-x-4'}>
      <a
        href='mailto:yoendymc@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        role='link'
        className='inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:underline  group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
      >
        <svg
          className='size-4'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path
            stroke='none'
            d='M0 0h24v24H0z'
            fill='none'
          ></path>
          <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5'></path>
          <path d='M3 6l9 6l9 -6'></path>
          <path d='M15 18h6'></path>
          <path d='M18 15l3 3l-3 3'></path>
        </svg>
        Contact Me
      </a>

      <a
        href='https://linkedin.com/in/yoendymc'
        target='_blank'
        rel='noopener noreferrer'
        role='link'
        className='inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:underline  group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'
      >
        <svg
          className='size-4'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path
            stroke='none'
            d='M0 0h24v24H0z'
            fill='none'
          ></path>
          <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
          <path d='M8 11l0 5'></path>
          <path d='M8 8l0 .01'></path>
          <path d='M12 16l0 -5'></path>
          <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
        </svg>
        LinkedIn
      </a>
    </div>
  )
}

export default ListContact
