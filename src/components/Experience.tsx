import React from 'react'
import { v4 as uuid } from 'uuid'

import ExperienceItem from '@/src/components/ExperienceItem'
import SectionContainer from '@/src/components/SectionContainer'

const EXPERIENCE = [
  {
    date: 'jun. 2024 - present',
    title: 'Senior Frontend Developer',
    company: 'Blindster',
    description: [
      'Work on the Blindster website. ReactJS, Next JS, Git, Tailwind CSS',
    ],
  },
  {
    date: 'abr. 2020 - jun. 2024',
    title: 'Senior Frontend Developer',
    company: 'Blindster | Ganesha | Genius',
    description: [
      'Video call platform to connect experts with users(GeniusCall). ReactJS, Next JS, Bitbucket, Tailwind CSS',
      'Corporate website for a venture capital firm(VCMetis). ReactJS, Next JS, Bitbucket, Tailwind CSS',
      'Development of the new version of the Blindster website. ReactJS, Next JS, Bitbucket, Tailwind CSS',
    ],
  },
  {
    date: 'jul. 2018 - abr. 2020',
    title: 'Front-End Developer',
    company: 'US General Software Inc',
    description: [
      'Work in the development team responsible for the migration of the Smart Drops (Vertrax) system. ReactJS, React-Mobx, Git, BluePrint',
    ],
  },

  {
    date: 'sept. 2012 - jul 2018',
    title: 'Senior Web Application Developer',
    company: 'XETID',
    description: [
      'Development of the Management System for the Network of Pharmacies of Cuba. Backend – Frontend, PHP, Zend Framework v1, PostgreSql, Doctrine 1, JavaScript, Ext JS, JQuery, Subversion, Jasper Report.',
      'Development of the ERP Distra. Backend – Frontend, PHP, Zend Framework v1, PostgreSql, Doctrine 1, JavaScript, Ext JS, JQuery, Subversion, Jasper Report.',
      'Development of the System of Management and control of the transportation of the Cuban mercantile society. Backend – Frontend, PHP, Zend Framework v1, PostgreSql, Doctrine 1, JavaScript, Ext JS, JQuery, Subversion, Jasper Report, Bootstrap.',
      'Development of the Shipping management system in its phase 1, for the shipping company MELFI. Backend – Frontend, PHP, Zend Framework v1, PostgreSql, Doctrine 1, JavaScript, Ext JS, JQuery, Subversion, Jasper Report.',
      'Development of the System for the registration, control and analysis of tangible resources in operation. Backend – Frontend, PHP, Zend Framework v1, PostgreSql, Doctrine 1, JavaScript, Ext JS, JQuery, Subversion, Jasper Report.',
      'Part of the TITAN system development team. Backend – Frontend, PHP, Zend Framework v1, PostgreSql, Doctrine 1, JavaScript, Ext JS, JQuery, Subversion.',
    ],
  },
]

function Experience() {
  return (
    <SectionContainer>
      <h2
        className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined'
        id={'experience'}
      >
        <svg
          className='size-8'
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
          <path d='M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
          <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2'></path>
          <path d='M12 12l0 .01'></path>
          <path d='M3 13a20 20 0 0 0 18 0'></path>
        </svg>
        Professional Experience
      </h2>

      <ol className='relative mt-16'>
        {EXPERIENCE.map((experience) => (
          <li
            className=''
            key={uuid()}
          >
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </SectionContainer>
  )
}

export default Experience
