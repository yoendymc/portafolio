'use client'

import React from 'react';

function Rights() {
  return (
    <p className='text-sm text-center md:text-left'>
      © {new Date().getFullYear()}{' '}
      <span className='text-white font-semibold'>
        Yoendy Martínez Contreras
      </span>
      . All rights reserved.
    </p>
  )
}

export default Rights;