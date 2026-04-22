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
              {/* 1 Month */}
              <div className="pricing-card">
                <div className="pricing-duration">1 Month</div>
                <h3 className="pricing-pack-name">8 Classes — Starter Track</h3>
                <div className="pricing-price">₹3,072 <span className="pricing-rate">(@ ₹384/class)</span></div>
                <p className="pricing-ideal">Get Started. See Initial Progress.</p>
                <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '15px' }}>No discount</div>

                <HighlightBadge color="#888" icon={Star}>
                  Best for: Trying structured chess coaching before committing long-term
                </HighlightBadge>

                <p className="pricing-includes" style={{ marginTop: '12px' }}>What your child will achieve:</p>
                <ul className="pricing-features" style={{ marginBottom: '12px' }}>
                  <FeatItem>Build clarity in key concepts based on their current level</FeatItem>
                  <FeatItem>Identify and correct common mistakes</FeatItem>
                  <FeatItem>Improve thinking habits and decision-making</FeatItem>
                  <FeatItem>Gain confidence through guided practice</FeatItem>
                </ul>

                <p className="pricing-includes">Includes:</p>
                <ul className="pricing-features" style={{ marginBottom: '16px' }}>
                  <FeatItem>8 live coaching sessions</FeatItem>
                  <FeatItem>Structured curriculum (adapted to level)</FeatItem>

                </ul>

                <div style={{ fontSize: '0.85rem', color: '#009B77', marginBottom: '8px', display: 'flex', gap: '6px' }}><span>⚠️</span> <span>Short-term exposure — limited time for deep improvement</span></div>
                <div style={{ fontSize: '0.85rem', color: '#0C8599', marginBottom: '24px', display: 'flex', gap: '6px' }}><span>💡</span> <span>Most students upgrade to 16 classes to see real results</span></div>

                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{ marginTop: 'auto' }}><span>Get Started</span></a>
              </div>

              {/* 2 Months */}
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="pricing-duration">2 Months</div>
                <h3 className="pricing-pack-name">16 Classes — Growth Track</h3>
                <div className="pricing-price">₹5,440 <span className="pricing-rate">(@ ₹340/class)</span></div>
                <p className="pricing-ideal">Real Improvement Begins Here.</p>
                <div style={{ color: '#009B77', fontSize: '0.85rem', fontWeight: 600, marginBottom: '15px' }}>✅ 10% Savings (Save ₹44/class)</div>

                <HighlightBadge color="#F8A213" icon={Zap}>
                  💡 This is where most students start showing clear, measurable improvement
                </HighlightBadge>

                <p className="pricing-includes" style={{ marginTop: '12px' }}>What your child will achieve:</p>
                <ul className="pricing-features" style={{ marginBottom: '12px' }}>
                  <FeatItem>Strong improvement in tactical awareness & pattern recognition</FeatItem>
                  <FeatItem>Significant reduction in blunders</FeatItem>
                  <FeatItem>Ability to plan moves instead of reacting randomly</FeatItem>
                  <FeatItem>More structured, confident gameplay</FeatItem>
                </ul>

                <p className="pricing-includes">🔥 Key Outcome Advantage:</p>
                <ul className="pricing-features" style={{ marginBottom: '12px' }}>
                  <FeatItem><span style={{ color: '#009B77', fontWeight: 700 }}>1 Detailed Feedback Report → Clear understanding of strengths & weaknesses</span></FeatItem>
                </ul>

                <p className="pricing-includes">Includes everything in 8 classes PLUS:</p>
                <ul className="pricing-features" style={{ marginBottom: '16px' }}>
                  <FeatItem><span style={{ color: '#d97706', fontWeight: 700 }}>Certificate of Completion</span></FeatItem>
                </ul>

                <div style={{ fontSize: '0.9rem', color: '#642b8f', fontWeight: 700, marginBottom: '24px', display: 'flex', gap: '6px' }}><span>👉</span> <span>Best balance of results, guidance, and value</span></div>

                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{ marginTop: 'auto' }}><span>Get Started</span></a>
              </div>

              {/* 6 Months */}
              <div className="pricing-card premium">
                <div className="pricing-duration">6 Months</div>
                <h3 className="pricing-pack-name">48 Classes — Elite Track</h3>
                <div className="pricing-price">₹14,400 <span className="pricing-rate">(@ ₹300/class)</span></div>
                <p className="pricing-ideal">Serious Progress. Measurable Results.</p>
                <div style={{ color: '#009B77', fontSize: '0.85rem', fontWeight: 600, marginBottom: '15px' }}>✅ 15% Savings (Save ₹84/class) — Best Value</div>

                <HighlightBadge color="#009B77" icon={Trophy}>
                  💡 Designed for long-term growth, consistency, and competitive readiness
                </HighlightBadge>

                <p className="pricing-includes" style={{ marginTop: '12px' }}>What your child will achieve:</p>
                <ul className="pricing-features" style={{ marginBottom: '12px' }}>
                  <FeatItem>Deep tactical & positional understanding</FeatItem>
                  <FeatItem>Consistent performance across games</FeatItem>
                  <FeatItem>Strong decision-making under pressure</FeatItem>
                  <FeatItem>Confidence to compete in tournaments</FeatItem>
                </ul>

                <p className="pricing-includes">🚀 Premium Outcome Advantage:</p>
                <ul className="pricing-features" style={{ marginBottom: '12px' }}>
                  <FeatItem><span style={{ color: '#009B77', fontWeight: 700 }}>3 Detailed Feedback Reports → Track and measure improvement over time</span></FeatItem>
                  <FeatItem>Structured long-term development with visible progress</FeatItem>
                </ul>

                <p className="pricing-includes">Includes everything in 16 classes PLUS:</p>
                <ul className="pricing-features" style={{ marginBottom: '16px' }}>
                  <FeatItem>FIDE Rating Pathway Consultation (if eligible)</FeatItem>
                  <FeatItem><span style={{ color: '#d97706', fontWeight: 700 }}>Certificate of Level Completion + Performance Report</span></FeatItem>
                </ul>

                <div style={{ fontSize: '0.9rem', color: '#009B77', fontWeight: 700, marginBottom: '24px', display: 'flex', gap: '6px' }}><span>👉</span> <span>For parents serious about long-term mastery and real results</span></div>

                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{ marginTop: 'auto' }}><span>Get Started</span></a>
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
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{ marginTop: 'auto' }}><span>Get Started</span></a>
              </div>

              {/* 2 Months */}
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="pricing-duration">2 Months</div>
                <h3 className="pricing-pack-name">16 Class Pack</h3>
                <div className="pricing-price">₹7,072</div>
                <p className="pricing-ideal">The best balance of value and commitment.</p>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{ marginTop: 'auto' }}><span>Get Started</span></a>
              </div>

              {/* 6 Months */}
              <div className="pricing-card">
                <div className="pricing-duration">6 Months</div>
                <h3 className="pricing-pack-name">48 Class Pack</h3>
                <div className="pricing-price">₹18,480</div>
                <p className="pricing-ideal">Best value for dedicated students committed to mastery.</p>
                <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn" style={{ marginTop: 'auto' }}><span>Get Started</span></a>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="pricing-faq mt-large">
          <h2 className="text-center mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>Pricing Questions, Answered</h2>
          <div className="faq-grid" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: 'Are there any hidden registration or material fees?', a: 'No. Our pricing is all-inclusive. The package fee covers all classes, online portal access, and practice materials for your child\'s program. There are no surprise charges.' },
              { q: 'What is the validity of the class packages?', a: 'The 8-class package is valid for 1 month, the 16-class package is valid for 2 months, and the 48-class package is valid for 6 months. This structure helps maintain consistent progress for the students.' },
              { q: 'What is your policy for missed classes?', a: 'We understand that life happens! We offer the flexibility to attend catch-up classes on different days to ensure you get the full value of your package within its validity period. Please speak to your center manager to schedule a catch-up class.' },
              { q: 'Do you offer sibling discounts?', a: 'Yes, we do! We offer a 10% discount for the second child.' },
            ].map((faq, i) => (
              <div key={i} className="faq-card glass-card p-4">
                <h4 style={{ marginBottom: '8px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ChevronRight size={16} strokeWidth={2.5} style={{ color: '#F8A213', flexShrink: 0 }} />
                  {faq.q}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
