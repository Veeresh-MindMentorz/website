import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Coaches from './components/Coaches'
import Results from './components/Results'
import WhyUs from './components/WhyUs'
import Program from './components/Program'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import RefundPolicy from './components/RefundPolicy'
import TermsOfService from './components/TermsOfService'
import Pricing from './components/Pricing'
import Locations from './components/Locations'
import CenterPage from './components/CenterPage'
import AboutUs from './components/AboutUs'
import LandingPage from './components/LandingPage'

function FloatingTrialButton() {
  return (
    <a
      href="https://skuare.mindmentorz.com/public/register"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Book Free Trial"
    >
      <span className="wa-icon">💬</span>
      <span className="wa-label">Book Free Trial</span>
    </a>
  )
}

function AppContent() {
  return (
    <div className="app">
      <Navbar />
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


function LegalPage({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

// Center pages: no main Navbar, no Footer — standalone experience
function CenterLayout({ children }) {
  return <>{children}</>
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/pricing" element={<LegalPage><Pricing /></LegalPage>} />
        <Route path="/locations" element={<LegalPage><Locations /></LegalPage>} />
        <Route path="/locations/:slug" element={<CenterLayout><CenterPage /></CenterLayout>} />
        <Route path="/blogs" element={<LegalPage><Blog /></LegalPage>} />
        <Route path="/blogs/:slug" element={<LegalPage><BlogPost /></LegalPage>} />
        <Route path="/about" element={<LegalPage><AboutUs /></LegalPage>} />
        <Route path="/privacy-policy" element={<LegalPage><PrivacyPolicy /></LegalPage>} />
        <Route path="/terms-of-service" element={<LegalPage><TermsOfService /></LegalPage>} />
        <Route path="/refund-policy" element={<LegalPage><RefundPolicy /></LegalPage>} />
      </Routes>
      <FloatingTrialButton />
    </Router>
  )
}

export default App
