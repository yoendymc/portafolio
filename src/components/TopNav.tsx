'use client'

import React, { useEffect, useState } from 'react'
import { scroller } from 'react-scroll'

function TopNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (key: string) => {
    scroller.scrollTo(key, {
      duration: 1200,
      smooth: true,
      offset: -80,
    })
  }

  return (
    <div
      className={`w-fit flex justify-between items-center px-4 py-1 rounded-full bg-gray-50 ${scrolled ? 'dark:bg-gray-800 border border-gray-700 shadow-md' : 'dark:bg-gray-900'} `}
    >
      <nav className='space-x-6'>
        <button
          onClick={() => scrollTo('about')}
          type={'button'}
          className={'cursor-pointer hover:underline'}
        >
          About Me
        </button>
        <button
          onClick={() => scrollTo('projects')}
          type={'button'}
          className={'cursor-pointer hover:underline'}
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo('experience')}
          type={'button'}
          className={'cursor-pointer hover:underline'}
        >
          Experience
        </button>
      </nav>
    </div>
  )
}

export default TopNav
