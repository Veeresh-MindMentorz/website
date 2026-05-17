import Hero from './Hero'
import Stats from './Stats'
import WhyUs from './WhyUs'
import Coaches from './Coaches'
import Gallery from './Gallery'
import Results from './Results'
import Program from './Program'
import Journey from './Journey'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="app">
      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <Coaches />
        <Gallery />
        <Results />
        <Program />
        <Journey />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
