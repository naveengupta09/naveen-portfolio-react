import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import ContributionSection from '@/components/sections/ContributionSection'
import EducationSection from '@/components/sections/EducationSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import React from 'react'

const HomePage = () => {
  return (
    <div className='max-w-4xl p-4 mx-auto border min-h-svh space-y-20'>
      <HeroSection/>
      <ContributionSection/>
      <AboutSection/>
      <EducationSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>
  )
}

export default HomePage
