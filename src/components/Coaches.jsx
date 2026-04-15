import './Coaches.css'
import { useRef } from 'react'

const coaches = [
  {
    photo: '/coach-arjun.jpg', name: 'GM Arjun Sharma', title: 'GRANDMASTER',
    rating: 'FIDE Rating: 2340', exp: '12+ Years Experience',
    speciality: '⚡ Tactical Calculation & Attack',
    color: '#7C3AED',
    features: ['Strong FIDE rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-priya.jpg', name: 'IM Priya Nair', title: 'INT. MASTER',
    rating: 'FIDE Rating: 2180', exp: '8+ Years Experience',
    speciality: '♟ Endgame Mastery & Strategy',
    color: '#9D60FA',
    features: ['Strong FIDE rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-roshan.jpg', name: 'FM Roshan Das', title: 'FIDE MASTER',
    rating: 'FIDE Rating: 2090', exp: '6+ Years Experience',
    speciality: '📚 Opening Theory & Preparation',
    color: '#B084FF',
    features: ['Strong FIDE rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-sneha.jpg', name: 'CM Sneha Pillai', title: 'CAND. MASTER',
    rating: 'FIDE Rating: 1980', exp: '5+ Years Experience',
    speciality: '🌱 Youth Development & Mindset',
    color: '#F8A213',
    features: ['Strong FIDE rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-vikram.jpg', name: 'FM Vikram Rao', title: 'FIDE MASTER',
    rating: 'FIDE Rating: 2120', exp: '7+ Years Experience',
    speciality: '🎯 Middlegame Structures',
    color: '#6D28D9',
    features: ['Strong FIDE rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
]

export default function Coaches() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="section coaches-section" id="coaches">
      <div className="orb coaches-orb-1" />
      <div className="container relative">
        <div className="text-center">
          <div className="section-tag">👨‍🏫 Meet Our Coaches</div>
          <h2 className="section-title">Train With FIDE-Rated Coaches<br />Who Build <span className="coaches-gold-accent">Tournament Players</span></h2>
          <div className="divider divider-center" />
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Our coaches are not casual instructors — they are competitive players who understand what it takes to win.
          </p>
        </div>

        {/* Outer relative wrapper for side arrows */}
        <div className="coaches-carousel-container">
          {/* Side Arrows */}
          <button className="coaches-side-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
          <button className="coaches-side-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>

          {/* Horizontal Scroll */}
          <div className="coaches-scroll-wrapper" ref={scrollRef}>
            <div className="coaches-track">
              {coaches.map((c) => (
                <div
                  key={c.name}
                  className="coach-card"
                  style={{ '--coach-color': c.color }}
                >
                  <div className="coach-photo-wrap">
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="coach-photo"
                      style={{ borderColor: c.color }}
                    />
                  </div>
                  <div
                    className="coach-badge"
                    style={{
                      color: c.color,
                      borderColor: c.color + '44',
                      background: c.color + '10',
                    }}
                  >
                    {c.title}
                  </div>
                  <div className="coach-name">{c.name}</div>
                  <div className="coach-rating">{c.rating}</div>
                  <div className="coach-exp">{c.exp}</div>
                  <div className="coach-speciality" style={{ background: c.color + '12', color: c.color }}>
                    {c.speciality}
                  </div>
                  <ul className="coach-features">
                    {c.features.map(f => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="coaches-note">
          🏅 Your child learns from serious competitors — not hobby players.
        </p>
      </div>
    </section>
  )
}

