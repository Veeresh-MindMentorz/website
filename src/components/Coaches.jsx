import './Coaches.css'
import { useRef } from 'react'
import { Zap, Crown, BookOpen, Sprout, Target, Users2, Medal, CheckCircle2 } from 'lucide-react'

/* Map speciality label → Lucide icon component */
const SPEC_ICONS = {
  'Tactical Calculation & Attack': { Icon: Zap,      color: '#F8A213' },
  'Endgame Mastery & Strategy':    { Icon: Crown,     color: '#642b8f' },
  'Opening Theory & Preparation':  { Icon: BookOpen,  color: '#3B5BDB' },
  'Youth Development & Mindset':   { Icon: Sprout,    color: '#009B77' },
  'Middlegame Structures':         { Icon: Target,    color: '#E03131' },
}

function SpecialityIcon({ label, color }) {
  const match = Object.entries(SPEC_ICONS).find(([k]) => label.includes(k))
  if (!match) return null
  const { Icon } = match[1]
  return <Icon size={14} strokeWidth={2} style={{ color, flexShrink: 0 }} />
}

const coaches = [
  {
    photo: '/coach-venugopal.jpg', name: 'Venugopal', title: 'COACH',
    rating: 'Rating: 1522', exp: 'Experienced',
    speciality: 'Tactical Calculation & Attack',
    color: '#7C3AED',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-rohit.jpg', name: 'Rohit', title: 'COACH',
    rating: 'Rating: 1755', exp: 'Experienced',
    speciality: 'Endgame Mastery & Strategy',
    color: '#9D60FA',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-premlatha.jpg', name: 'Premlatha', title: 'COACH',
    rating: 'Rating: 1422', exp: 'Experienced',
    speciality: 'Opening Theory & Preparation',
    color: '#B084FF',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-praveen.jpg', name: 'Praveen', title: 'HEAD COACH',
    rating: 'Rating: 2777', exp: '10+ Years Experience',
    speciality: 'Youth Development & Mindset',
    color: '#F8A213',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-pradeep.jpg', name: 'Pradeep', title: 'COACH',
    rating: 'Rating: 2350', exp: 'Experienced',
    speciality: 'Middlegame Structures',
    color: '#6D28D9',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-newprakash.jpg', name: 'Newprakash', title: 'COACH',
    rating: 'Rating: 1943', exp: 'Experienced',
    speciality: 'Tactical Calculation & Attack',
    color: '#3B82F6',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-kavipriya.jpg', name: 'Kavipriya', title: 'COACH',
    rating: 'Rating: 1643', exp: 'Experienced',
    speciality: 'Endgame Mastery & Strategy',
    color: '#10B981',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-kannan.jpg', name: 'Kannan', title: 'COACH',
    rating: 'Rating: 1834', exp: 'Experienced',
    speciality: 'Opening Theory & Preparation',
    color: '#EC4899',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-kanishka.jpg', name: 'Kanishka', title: 'COACH',
    rating: 'Rating: 1843', exp: 'Experienced',
    speciality: 'Youth Development & Mindset',
    color: '#F59E0B',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
  },
  {
    photo: '/coach-kabir.jpg', name: 'Kabir', title: 'COACH',
    rating: 'Rating: 2200', exp: 'Experienced',
    speciality: 'Middlegame Structures',
    color: '#6366F1',
    features: ['Strong rating credentials', 'Years of tournament experience', 'Deep focus on calculation', 'Competitive mindset training'],
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
          <div className="section-tag">
            <Users2 size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            Meet Our Coaches
          </div>
          <h2 className="section-title">Train With FIDE-Rated Coaches<br />Who Build <span className="coaches-gold-accent">Tournament Players</span></h2>
          <div className="divider divider-center" />
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Our coaches are not casual instructors — they are competitive players who understand what it takes to win.
          </p>
        </div>

        <div className="coaches-carousel-container">
          <button className="coaches-side-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
          <button className="coaches-side-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>

          <div className="coaches-scroll-wrapper" ref={scrollRef}>
            <div className="coaches-track">
              {coaches.map((c) => (
                <div key={c.name} className="coach-card" style={{ '--coach-color': c.color }}>
                  <div className="coach-photo-wrap">
                    <img src={c.photo} alt={c.name} className="coach-photo" style={{ borderColor: c.color }} />
                  </div>
                  <div className="coach-badge" style={{ color: c.color, borderColor: c.color + '44', background: c.color + '10' }}>
                    {c.title}
                  </div>
                  <div className="coach-name">{c.name}</div>
                  <div className="coach-rating">{c.rating}</div>
                  <div className="coach-exp">{c.exp}</div>
                  <div className="coach-speciality" style={{ background: c.color + '12', color: c.color, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <SpecialityIcon label={c.speciality} color={c.color} />
                    {c.speciality}
                  </div>
                  <ul className="coach-features">
                    {c.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                        <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: '#009B77', flexShrink: 0, marginTop: 2 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="coaches-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <Medal size={16} strokeWidth={2} style={{ color: '#F8A213', flexShrink: 0 }} />
          Your child learns from serious competitors — not hobby players.
        </p>
      </div>
    </section>
  )
}
