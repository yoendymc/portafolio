import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yoendy Martínez Contreras | Front-End Developer',
  description:
    'Professional portfolio of Yoendy Martínez Contreras, a Front-End Developer specializing in React, Next.js, and Node.js. Explore my projects, experience, and technical skills in modern web development.',
  keywords: [
    'Yoendy Martínez Contreras',
    'Front-End Developer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Full Stack Developer',
    'Portfolio',
    'Web Developer',
  ],
  authors: [
    {
      name: 'Yoendy Martínez Contreras',
      url: 'https://www.linkedin.com/in/yoendymc/',
    },
  ],
  creator: 'Yoendy Martínez Contreras',
  openGraph: {
    title: 'Yoendy Martínez Contreras | Front-End Developer',
    description:
      'Front-End Developer with expertise in React, Next.js, and Node.js. Explore my professional portfolio showcasing real-world projects and web development skills.',
    url: 'https://portafolio-two-olive-64.vercel.app/',
    siteName: 'Yoendy Martínez Contreras',
    images: [
      {
        url: '/images/yoendy_M.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoendy Martínez Contreras - Front-End Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoendy Martínez Contreras | Front-End Developer',
    description:
      'Portfolio of Yoendy Martínez Contreras, Front-End Developer focused on React, Next.js, and high-performance web applications.',
    creator: '@yoendymc',
    images: ['/images/yoendy_M.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
