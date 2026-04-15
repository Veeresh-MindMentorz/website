import './Results.css'
import { useRef } from 'react'

const students = [
  { photo: '/student-aarav.jpg',  name: 'Aarav',  age: 10, achievement: '0 → 1450 Rapid Rating in 12 Months', sub: '🏆 3 Tournament Wins', color: '#7C3AED', months: 12, before: 0,   after: 1450 },
  { photo: '/student-diya.jpg',   name: 'Diya',   age: 9,  achievement: 'Beginner → District-Level Winner',   sub: '📈 Rapid improvement in 8 months',        color: '#F8A213', months: 8,  before: 400, after: 1100 },
  { photo: '/student-rohan.jpg',  name: 'Rohan',  age: 12, achievement: '900 → 1600 Strength',               sub: '♟ Qualified for state-level tournaments', color: '#9D60FA', months: 10, before: 900, after: 1600 },
  { photo: '/student-ananya.jpg', name: 'Ananya', age: 11, achievement: '500 → 1200 in 9 Months',            sub: '🥇 Zone-level tournament winner',          color: '#E5B700', months: 9,  before: 500, after: 1200 },
  { photo: '/student-karan.jpg',  name: 'Karan',  age: 13, achievement: '1000 → 1700 FIDE Prep Track',      sub: '🎯 National qualifier',                   color: '#6D28D9', months: 14, before: 1000,after: 1700 },
]

export default function Results() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="section results-section" id="results">
      <div className="container relative">
        <div className="text-center">
          <div className="section-tag">🏆 Student Results</div>
          <h2 className="section-title">Real Students. <span className="results-gold-accent">Real Ratings.</span><br />Real Results.</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            We don't just teach chess — we deliver measurable improvement.
          </p>
        </div>

        {/* Outer relative wrapper for side arrows */}
        <div className="results-carousel-container">
          {/* Side Arrows */}
          <button className="results-side-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
          <button className="results-side-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>

          {/* Horizontal Scroll Track */}
          <div className="results-scroll-wrapper" ref={scrollRef}>
            <div className="results-track">
              {students.map((s, i) => (
                <div key={i} className="result-card" style={{ '--card-color': s.color }}>
                  <div className="result-header">
                    <div className="result-photo-wrap">
                      <img
                        src={s.photo}
                        alt={s.name}
                        className="result-photo"
                        style={{ borderColor: s.color }}
                      />
                    </div>
                    <div>
                      <div className="result-name">{s.name}</div>
                      <div className="result-age">Age {s.age} · {s.months} months</div>
                    </div>
                  </div>
                  <div className="result-progress">
                    <div className="progress-labels">
                      <span>{s.before === 400 ? 'Beginner' : s.before}</span>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.after} ♟</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ background: `linear-gradient(90deg, ${s.color}66, ${s.color})` }} />
                    </div>
                  </div>
                  <h4 className="result-achievement">{s.achievement}</h4>
                  <p className="result-sub">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="results-cta text-center">
          <p>👉 <strong>Consistent training + the right system = predictable progress</strong></p>
        </div>
      </div>
    </section>
  )
}

