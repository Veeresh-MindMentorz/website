import './Journey.css'
import { CalendarCheck, ClipboardList, Rocket, ArrowRight, Map } from 'lucide-react'

const steps = [
  {
    num: '01',
    Icon: CalendarCheck,
    title: 'Book a Free Trial',
    desc: 'Experience our training system firsthand — no strings attached.',
    color: '#F8A213',
  },
  {
    num: '02',
    Icon: ClipboardList,
    title: 'Get a Proper Assessment',
    desc: "We identify your child's strengths and areas for improvement.",
    color: '#9D60FA',
  },
  {
    num: '03',
    Icon: Rocket,
    title: 'Join the Right Program',
    desc: 'Structured progress begins immediately with the right level and coach.',
    color: '#7C3AED',
  },
]

export default function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <div className="orb journey-orb-1" />
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Map size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            Your Journey
          </div>
          <h2 className="section-title">From First Move to FIDE Rating<br />— Here's How It Works</h2>
          <div className="divider divider-center" />
        </div>

        <div className="journey-steps">
          {steps.map((s, i) => (
            <div key={i} className="journey-step-wrapper">
              <div className="journey-step glass-card" style={{ '--step-color': s.color }}>
                <div className="step-num" style={{ color: s.color }}>{s.num}</div>
                <div className="step-icon" style={{ color: s.color }}>
                  <s.Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="step-title">Step {i + 1}: {s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                <div className="step-glow" style={{ background: s.color }} />
              </div>
              {i < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line" />
                  <span className="connector-arrow">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="journey-cta glass-card">
          <div className="journey-cta-inner">
            <div>
              <h3>
                <ArrowRight size={20} strokeWidth={2.5} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8, color: '#F8A213' }} />
                Book Your Free Trial Now
              </h3>
              <p>Limited slots to maintain coaching quality</p>
            </div>
            <a href="https://skuare.mindmentorz.com/parent-login" 
               target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>Book Free Trial →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
