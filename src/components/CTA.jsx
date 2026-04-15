import './CTA.css'

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
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>🚀 Final Step</div>
          <h2 className="section-title">Ready to Build Your Child's<br />Chess Future?</h2>
          <p className="cta-subtitle">
            Give your child the advantage of structured learning, expert coaching, and real competitive success.
          </p>

          <div className="cta-benefits">
            <span>✅ FIDE-Rated Coaches</span>
            <span>✅ Structured Curriculum</span>
            <span>✅ Free Assessment</span>
            <span>✅ No Commitment</span>
          </div>

          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20book%20a%20free%20trial%20chess%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta-btn"
          >
            <span>👉 Book a Free Trial Class Today</span>
          </a>
          <p className="cta-note">⚡ Limited seats available. Start now.</p>
        </div>
      </div>
    </section>
  )
}
