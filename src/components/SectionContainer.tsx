import React, { PropsWithChildren } from 'react'

function SectionContainer({ children }: PropsWithChildren) {
  return <section className='pt-20 max-w-4xl mx-auto px-4'>{children}</section>
}

export default SectionContainer
