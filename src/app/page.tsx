import HeroSection from '@/src/components/HeroSection'
import Experience from '@/src/components/Experience'
import Projects from '@/src/components/Projects'
import AboutMeSection from '@/src/components/AboutMeSection'

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100'>
        <HeroSection />
        <Experience />
        <Projects />
        <AboutMeSection />
      </main>
    </>
  )
}
