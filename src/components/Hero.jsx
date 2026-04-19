import './Hero.css'

const highlights = [
  'FIDE-Rated Coaches',
  'Structured 6-Level Program',
  'Tournament Preparation',
  'Confidence Building',
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="metadata">
        {/* Replace /hero-video.mp4 with your uploaded file in public/ */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="container hero-container">
        <div className="hero-content animate-fadeInUp">
          <div className="hero-kicker">From First Move to Checkmate</div>

          <h1 className="hero-title">
            Turn Your Child Into a
            <span className="hero-highlight"> Tournament-Ready </span>
            Chess Player
          </h1>

          <p className="hero-subtitle">
            From <strong>Absolute Beginner</strong> to <strong>FIDE-Level Competitor</strong> with
            structured, measurable progress and professional coaching.
          </p>

          <div className="hero-cta">
            <a href="https://skuare.mindmentorz.com/parent-login" target="_blank" rel="noopener noreferrer" className="btn-primary hero-primary-btn">
              <span>Book a Free Trial Class</span>
            </a>
            <a href="#program" className="btn-outline hero-outline-btn">
              Explore Programs
            </a>
          </div>

          <div className="hero-highlights">
            {highlights.map(item => (
              <span className="hero-chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
