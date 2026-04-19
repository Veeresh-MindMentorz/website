import './Results.css'
import { useRef } from 'react'
import { Trophy, TrendingUp, Crown, Medal, Target, ArrowRight } from 'lucide-react'

const students = [
  { photo: '/student-yashas.jpg',   name: 'Yashas Ram Tetali',  age: 10, achievement: '0 → 1450 Rapid Rating in 12 Months', sub: '3 Tournament Wins',             SubIcon: Trophy,    color: '#7C3AED', months: 12, before: 0,    after: 1450 },
  { photo: '/student-vrishank.jpg', name: 'Vrishank Reddy',     age: 9,  achievement: 'Beginner → District-Level Winner',   sub: 'Rapid improvement in 8 months', SubIcon: TrendingUp, color: '#F8A213', months: 8,  before: 400,  after: 1100 },
  { photo: '/student-sathvik.jpg',  name: 'Sathvik Sharath',    age: 12, achievement: '900 → 1600 Strength',               sub: 'State-level tournaments',      SubIcon: Crown,     color: '#9D60FA', months: 10, before: 900,  after: 1600 },
  { photo: '/student-riddhi.jpg',   name: 'Riddhi Gupta',       age: 11, achievement: '500 → 1200 in 9 Months',            sub: 'Zone-level tournament winner',  SubIcon: Medal,     color: '#E5B700', months: 9,  before: 500,  after: 1200 },
  { photo: '/student-prishita.jpg', name: 'Prishita Choudhary', age: 13, achievement: '1000 → 1700 FIDE Prep Track',      sub: 'National qualifier',            SubIcon: Target,    color: '#6D28D9', months: 14, before: 1000, after: 1700 },
  { photo: '/student-manjoyee.jpg', name: 'Manjoyee Roy',       age: 10, achievement: '0 → 1200 Rating in 10 Months',    sub: '2 Tournament Wins',             SubIcon: Trophy,    color: '#7C3AED', months: 10, before: 0,    after: 1200 },
  { photo: '/student-ariv.jpg',     name: 'FM Ariv Debmisra',   age: 14, achievement: '1200 → 2000 Strength',            sub: 'State-level champion',          SubIcon: Medal,     color: '#B084FF', months: 18, before: 1200, after: 2000 },
  { photo: '/student-anay.jpg',     name: 'Anay Banka',         age: 11, achievement: '600 → 1400 in 12 Months',         sub: 'Rapid improvement in 12 months',SubIcon: TrendingUp, color: '#F8A213', months: 12, before: 600,  after: 1400 },
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
          <div className="section-tag">
            <Trophy size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5, color: '#F8A213' }} />
            Student Results
          </div>
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
                  <p className="result-sub" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <s.SubIcon size={14} strokeWidth={2} style={{ color: s.color, flexShrink: 0 }} />
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="results-cta text-center">
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <ArrowRight size={16} strokeWidth={2.5} style={{ color: '#F8A213', flexShrink: 0 }} />
            <strong>Consistent training + the right system = predictable progress</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

