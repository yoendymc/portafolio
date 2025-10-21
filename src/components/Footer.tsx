import React from 'react'
import Rights from '@/src/components/Rights'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='text-center text-sm py-6 bg-white dark:bg-gray-900'>
      <div className='max-w-4xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-4'>
        <Rights />

        <div className='flex items-center gap-4 text-xl'>
          <a
            href='https://github.com/yoendymc'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-colors'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/yoendymc/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-colors'
          >
            <FaLinkedin />
          </a>
          <a
            href='mailto:yoendymc@gmail.com'
            className='hover:text-white transition-colors'
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
