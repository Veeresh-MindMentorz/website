import './CTA.css'
import { Rocket, CheckCircle2, ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="orb cta-orb-1" />
      <div className="orb cta-orb-2" />
      <div className="chess-bg cta-chess-bg" />

      <div className="container">
        <div className="cta-card glass-card">
          <div className="cta-pieces">
            <span className="cta-piece cta-piece-1">♔</span>
            <span className="cta-piece cta-piece-2">♛</span>
            <span className="cta-piece cta-piece-3">♝</span>
          </div>
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <Rocket size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            Final Step
          </div>
          <h2 className="section-title">Ready to Build Your Child's<br />Chess Future?</h2>
          <p className="cta-subtitle">
            Give your child the advantage of structured learning, expert coaching, and real competitive success.
          </p>

          <div className="cta-benefits">
            {['FIDE-Rated Coaches', 'Structured Curriculum', 'Free Assessment', 'No Commitment'].map((b) => (
              <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={15} strokeWidth={2.5} style={{ color: '#009B77', flexShrink: 0 }} />
                {b}
              </span>
            ))}
          </div>

          <a
            href="https://skuare.mindmentorz.com/parent-login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta-btn"
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <ArrowRight size={16} strokeWidth={2.5} />
              Book a Free Trial Class Today
            </span>
          </a>
          <p className="cta-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <Zap size={14} strokeWidth={2} style={{ color: '#F8A213', flexShrink: 0 }} />
            Limited seats available. Start now.
          </p>
        </div>
      </div>
    </section>
  )
}
