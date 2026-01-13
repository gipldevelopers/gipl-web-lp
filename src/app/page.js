
import CaseStudiesSlider from './components/casestudies'
import AnimatedCTASection from './components/cta'
import Footer from './components/footer'
import HeroSection from './components/hero'
import IndustriesSlider from './components/indusryslider'
import Nav from './components/nav'
import ScrollStorySection from './components/ScrollStorySection'
import WebsiteTypesGrid from './components/service_grid'
import StatsSection from './components/statesec'
import TechEcosystem from './components/techecosystem'
import TestimonialsSection from './components/testimonial'
import WhyChooseUsSection from './components/whychoooseus'
import TrustLineWorkflow from './components/TrustLineWorkflow'
import TrustedBrands from './components/TrustedBrands'

export default function Home() {
  return (
    <>
      <Nav />
      <main role="main">
        <HeroSection/>
        <TrustLineWorkflow/>
        <TrustedBrands/>
        <ScrollStorySection/>
        <AnimatedCTASection/>
        <WhyChooseUsSection/>
        <StatsSection/>
        <IndustriesSlider/>
        <TechEcosystem/>
        <WebsiteTypesGrid/>
        <CaseStudiesSlider/>
        <TestimonialsSection/>
      </main>
      <Footer/>
    </>
  )
}