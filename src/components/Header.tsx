import React from 'react'
import TopNav from '@/src/components/TopNav'

function Header() {
  return (
    <header className='mt-3 w-full flex justify-center fixed top-0 z-10 '>
      <TopNav></TopNav>
    </header>
  )
}

export default Header
