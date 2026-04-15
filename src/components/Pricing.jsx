import './Pricing.css'
import { useState } from 'react'

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
                  <li>✅ 8 Live Coaching Sessions</li>
                  <li>📘 Structured Beginner Curriculum</li>
                  <li>♟️ ChessKid Basic Account (Limited Access)</li>
                  <li>🎓 Certificate of Level Completion*</li>
                  <li>📝 Feedback Report (If Applicable)</li>
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
                
                <div className="pricing-highlight">🟠 16 Classes – Growth Track (Momentum Builder)</div>
                <p className="pricing-includes">Everything in 8 classes PLUS:</p>
                
                <ul className="pricing-features">
                  <li>✅ 1 Free Monthly Masterclass with AGM Praveen Sagar</li>
                  <li>✅ 1 Personalized Game Analysis + Written Report</li>
                  <li>✅ 20-Minute 1:1 Feedback Call</li>
                  <li>✅ 1 Free Tournament Entry</li>
                  <li>✅ Certificate of Course Completion*</li>
                  <li>✅ Feedback Report</li>
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
                
                <div className="pricing-highlight premium">🔴 48 Classes – Elite Long-Term Track</div>
                <p className="pricing-includes">Everything in 16 PLUS:</p>
                
                <div className="pricing-premium-label">🏆 Premium Additions</div>
                <ul className="pricing-features">
                  <li>✅ 2 Free Tournament Entries</li>
                  <li>✅ 3 Personalized Game Analysis Reports (spread across program)</li>
                  <li>✅ 2 Strategy Calls with AGM Praveen Sagar (30 mins each)</li>
                  <li>✅ Custom 6-Month Improvement Roadmap</li>
                  <li>✅ FIDE Rating Pathway Consultation (if eligible)</li>
                  <li>✅ Certificate of Completion + Performance Report</li>
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

        {/* FAQ Section extracted from Pricing request */}
        <div className="pricing-faq mt-large">
          <h2 className="text-center mb-6" style={{fontFamily:'var(--font-display)', fontWeight:800}}>Pricing Questions, Answered</h2>
          <div className="faq-grid" style={{maxWidth:'800px', margin:'0 auto', display:'flex', flexDirection:'column', gap:'20px'}}>
            <div className="faq-card glass-card p-4">
              <h4 style={{marginBottom:'8px', color:'var(--primary)'}}>Are there any hidden registration or material fees?</h4>
              <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', lineHeight:1.6}}>No. Our pricing is all-inclusive. The package fee covers all classes, online portal access, and practice materials for your child's program. There are no surprise charges.</p>
            </div>
            <div className="faq-card glass-card p-4">
              <h4 style={{marginBottom:'8px', color:'var(--primary)'}}>What is the validity of the class packages?</h4>
              <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', lineHeight:1.6}}>The 8-class package is valid for 1 month, the 16-class package is valid for 2 months, and the 48-class package is valid for 6 months. This structure helps maintain consistent progress for the students.</p>
            </div>
            <div className="faq-card glass-card p-4">
              <h4 style={{marginBottom:'8px', color:'var(--primary)'}}>What is your policy for missed classes?</h4>
              <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', lineHeight:1.6}}>We understand that life happens! We offer the flexibility to attend catch-up classes on different days to ensure you get the full value of your package within its validity period. Please speak to your center manager to schedule a catch-up class.</p>
            </div>
            <div className="faq-card glass-card p-4">
              <h4 style={{marginBottom:'8px', color:'var(--primary)'}}>Do you offer sibling discounts?</h4>
              <p style={{fontSize:'0.9rem', color:'var(--text-secondary)', lineHeight:1.6}}>Yes, we do! We offer a 10% discount for the second child.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
