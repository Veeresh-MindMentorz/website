import './Pricing.css'
import { useState } from 'react'
import {
  CheckCircle2, BookOpen, Crown, GraduationCap, FileText,
  Zap, Star, Trophy, Tag, ChevronRight,
} from 'lucide-react'

/* Reusable feature list item */
function FeatItem({ children }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
      <CheckCircle2
        size={16}
        strokeWidth={2.5}
        style={{ color: '#009B77', flexShrink: 0, marginTop: 2 }}
      />
      <span>{children}</span>
    </li>
  )
}

/* Highlight badge */
function HighlightBadge({ color, icon: Icon, children }) {
  return (
    <div className="pricing-highlight" style={{ borderLeftColor: color, background: color + '12' }}>
      <Icon size={15} strokeWidth={2} style={{ color, flexShrink: 0, marginRight: 6 }} />
      {children}
    </div>
  )
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('online')

  return (
    <div className="pricing-page">
      <div className="pricing-hero text-center">
        <div className="section-tag">Pricing</div>
        <h1 className="section-title" style={{ color: '#FFFFFF' }}>Invest in Your Child's <span className="pricing-gold">Future.</span></h1>
        <p className="pricing-subtitle">
          Choose the best learning format and duration for your child's chess journey.
        </p>
        
        <div className="pricing-tabs">
          <button 
            className={`pricing-tab ${activeTab === 'online' ? 'active' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            Online Classes
          </button>
          <button 
            className={`pricing-tab ${activeTab === 'offline' ? 'active' : ''}`}
            onClick={() => setActiveTab('offline')}
          >
            Offline Classes
          </button>
        </div>
      </div>

      <div className="container">
        {activeTab === 'online' && (
          <div className="pricing-tab-content">
            <div className="text-center mb-8">
              <h2 className="pricing-section-title">Online Class Packages</h2>
              <p className="pricing-section-desc">Flexible learning from the comfort of your home.</p>
            </div>

            <div className="pricing-grid">
              {/* 1 Month */}
              <div className="pricing-card">
                <div className="pricing-duration">1 Month</div>
                <h3 className="pricing-pack-name">8 Class Pack</h3>
                <div className="pricing-price">₹3,072</div>
                <p className="pricing-ideal">Perfect for getting started and learning the fundamentals.</p>
                <ul className="pricing-features">
                  <FeatItem>8 Live Coaching Sessions</FeatItem>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                    <BookOpen size={16} strokeWidth={2} style={{ color: '#3B5BDB', flexShrink: 0, marginTop: 2 }} />
                    <span>Structured Beginner Curriculum</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                    <Crown size={16} strokeWidth={2} style={{ color: '#642b8f', flexShrink: 0, marginTop: 2 }} />
                    <span>ChessKid Basic Account (Limited Access)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                    <GraduationCap size={16} strokeWidth={2} style={{ color: '#F8A213', flexShrink: 0, marginTop: 2 }} />
                    <span>Certificate of Level Completion*</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                    <FileText size={16} strokeWidth={2} style={{ color: '#0C8599', flexShrink: 0, marginTop: 2 }} />
                    <span>Feedback Report (If Applicable)</span>
                  </li>
                </ul>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn"><span>Get Started</span></a>
                <div className="pricing-footnote">*Only For New Enrollments</div>
              </div>

              {/* 2 Months */}
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="pricing-duration">2 Months</div>
                <h3 className="pricing-pack-name">16 Class Pack</h3>
                <div className="pricing-price">₹5,440</div>
                <p className="pricing-ideal">Ideal for building skills and gaining momentum.</p>
                
                <HighlightBadge color="#F8A213" icon={Zap}>
                  16 Classes – Growth Track (Momentum Builder)
                </HighlightBadge>
                <p className="pricing-includes">Everything in 8 classes PLUS:</p>
                
                <ul className="pricing-features">
                  <FeatItem>1 Free Monthly Masterclass with AGM Praveen Sagar</FeatItem>
                  <FeatItem>1 Personalized Game Analysis + Written Report</FeatItem>
                  <FeatItem>20-Minute 1:1 Feedback Call</FeatItem>
                  <FeatItem>1 Free Tournament Entry</FeatItem>
                  <FeatItem>Certificate of Course Completion*</FeatItem>
                  <FeatItem>Feedback Report</FeatItem>
                </ul>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn"><span>Get Started</span></a>
                <div className="pricing-footnote">*Only For New Enrollments</div>
              </div>

              {/* 6 Months */}
              <div className="pricing-card premium">
                <div className="pricing-duration">6 Months</div>
                <h3 className="pricing-pack-name">48 Class Pack</h3>
                <div className="pricing-price">
                  ₹14,400 <span className="pricing-rate">(@ ₹300/class)</span>
                </div>
                <p className="pricing-ideal">Best value for long-term growth and mastery.</p>
                
                <HighlightBadge color="#E03131" icon={Star}>
                  48 Classes – Elite Long-Term Track
                </HighlightBadge>
                <p className="pricing-includes">Everything in 16 PLUS:</p>
                
                <div className="pricing-premium-label">
                  <Trophy size={15} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6, color: '#F8A213' }} />
                  Premium Additions
                </div>
                <ul className="pricing-features">
                  <FeatItem>2 Free Tournament Entries</FeatItem>
                  <FeatItem>3 Personalized Game Analysis Reports (spread across program)</FeatItem>
                  <FeatItem>2 Strategy Calls with AGM Praveen Sagar (30 mins each)</FeatItem>
                  <FeatItem>Custom 6-Month Improvement Roadmap</FeatItem>
                  <FeatItem>FIDE Rating Pathway Consultation (if eligible)</FeatItem>
                  <FeatItem>Certificate of Completion + Performance Report</FeatItem>
                </ul>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn"><span>Get Started</span></a>
                <div className="pricing-footnote">*Only For New Enrollments</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'offline' && (
          <div className="pricing-tab-content">
            <div className="text-center mb-8">
              <h2 className="pricing-section-title">Offline Class Packages</h2>
              <p className="pricing-section-desc">Hands-on learning at our Bangalore centers.</p>
            </div>

            <div className="pricing-grid">
              {/* 1 Month */}
              <div className="pricing-card">
                <div className="pricing-duration">1 Month</div>
                <h3 className="pricing-pack-name">8 Class Pack</h3>
                <div className="pricing-price">₹3,840</div>
                <p className="pricing-ideal">Perfect for getting started at our academy.</p>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{marginTop:'auto'}}><span>Get Started</span></a>
              </div>

              {/* 2 Months */}
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="pricing-duration">2 Months</div>
                <h3 className="pricing-pack-name">16 Class Pack</h3>
                <div className="pricing-price">₹7,072</div>
                <p className="pricing-ideal">The best balance of value and commitment.</p>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{marginTop:'auto'}}><span>Get Started</span></a>
              </div>

              {/* 6 Months */}
              <div className="pricing-card">
                 <div className="pricing-duration">6 Months</div>
                <h3 className="pricing-pack-name">48 Class Pack</h3>
                <div className="pricing-price">₹18,480</div>
                <p className="pricing-ideal">Best value for dedicated students committed to mastery.</p>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{marginTop:'auto'}}><span>Get Started</span></a>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="pricing-faq mt-large">
          <h2 className="text-center mb-6" style={{fontFamily:'var(--font-display)', fontWeight:800}}>Pricing Questions, Answered</h2>
          <div className="faq-grid" style={{maxWidth:'800px', margin:'0 auto', display:'flex', flexDirection:'column', gap:'20px'}}>
            {[
              { q: 'Are there any hidden registration or material fees?', a: 'No. Our pricing is all-inclusive. The package fee covers all classes, online portal access, and practice materials for your child\'s program. There are no surprise charges.' },
              { q: 'What is the validity of the class packages?', a: 'The 8-class package is valid for 1 month, the 16-class package is valid for 2 months, and the 48-class package is valid for 6 months. This structure helps maintain consistent progress for the students.' },
              { q: 'What is your policy for missed classes?', a: 'We understand that life happens! We offer the flexibility to attend catch-up classes on different days to ensure you get the full value of your package within its validity period. Please speak to your center manager to schedule a catch-up class.' },
              { q: 'Do you offer sibling discounts?', a: 'Yes, we do! We offer a 10% discount for the second child.' },
            ].map((faq, i) => (
              <div key={i} className="faq-card glass-card p-4">
                <h4 style={{marginBottom:'8px', color:'var(--primary)', display:'flex', alignItems:'center', gap:8}}>
                  <ChevronRight size={16} strokeWidth={2.5} style={{ color: '#F8A213', flexShrink: 0 }} />
                  {faq.q}
                </h4>
                <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', lineHeight:1.6}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
