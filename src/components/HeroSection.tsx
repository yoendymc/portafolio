import React from 'react'
import Image from 'next/image'
import SectionContainer from '@/src/components/SectionContainer'
import ListContact from '@/src/components/ListContact'

function HeroSection() {
  return (
    <SectionContainer>
      <div className={'flex items-center space-x-4'}>
        <div className='size-16 rounded-full overflow-hidden'>
          <Image
            src={'/images/yoendy.jpg'}
            alt={'Yoendy'}
            width={1311}
            height={1314}
            layout={'responsive'}
          />
        </div>

        <a
          href='https://www.linkedin.com/in/yoendymc'
          target='_blank'
          rel='noopener'
          className='flex items-center transition md:justify-center md:hover:scale-105'
        >
          <div className='flex items-center '>
            <span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
              <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]'></span>
              <div className='inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap'>
                Open to Work
              </div>
            </span>
          </div>
        </a>
      </div>
      <h1 className='text-5xl font-bold my-4'>Hi, I'm Yoendy</h1>
      <p
        className={
          'text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300'
        }
      >
        <strong>Senior Front-End Developer</strong> with over 10 years of
        experience building web applications. Passionate about new technologies
        and creating scalable solutions using JavaScript, HTML, and CSS.
        Currently based in Mexico.
      </p>

      <ListContact />
    </SectionContainer>
  )
}

export default HeroSection
