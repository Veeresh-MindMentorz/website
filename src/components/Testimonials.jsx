import './Testimonials.css'
import { useRef, useEffect, useState } from 'react'

const REVIEWS = [
  { name: 'Ankit Gupta', rating: 5, review: 'Teachers are patient and knowledgeable. Classes are fun and improve concentration and logical thinking.' },
  { name: 'Yashaswini K R', rating: 5, review: 'Mentors give equal attention to every child and encourage them at every step.' },
  { name: 'Kiran Kumar', rating: 5, review: 'My child started from zero and now plays confidently. Very patient teachers.' },
  { name: 'Anitha Shree B.S', rating: 5, review: 'Interactive sessions and great coaching. My son enjoys every class.' },
  { name: 'Julia Jude', rating: 5, review: 'My son improved significantly and developed a strong interest in chess.' },
  { name: 'Rajeev Jha', rating: 4, review: 'Good focus on theory and practice. Monthly tournaments are very helpful.' },
  { name: 'Anup Narayanan', rating: 5, review: 'Knowledgeable trainers and enjoyable learning experience for kids.' },
  { name: 'Ankit Agrawal', rating: 5, review: 'Small batches ensure personal attention. Strong focus on strategies.' },
  { name: 'Swetha Jayakumar', rating: 5, review: 'Coaches are patient, knowledgeable, and encouraging.' },
  { name: 'Mrudula Patwardhan', rating: 4, review: 'Well-structured sessions with puzzles and practice. Easy to follow.' },
  { name: 'Smitha S', rating: 5, review: 'My son became more focused, confident, and strategic.' },
  { name: 'Raja', rating: 5, review: 'Professional coaching with both online and offline options.' },
  { name: 'Rajyalakshmi N', rating: 5, review: 'Amazing teaching style. My son improved a lot.' },
  { name: 'Amit Garg', rating: 4, review: 'Supportive environment with patient coaches and good structure.' },
  { name: 'Ritika Jain', rating: 5, review: 'Coach explains concepts clearly and is always punctual.' },
  { name: 'Deepashree', rating: 5, review: 'Puzzle-based learning helps kids understand real game situations.' },
  { name: 'Suraj Soni', rating: 5, review: 'Great platform for young chess learners to grow.' },
  { name: 'Ish Arora', rating: 5, review: 'Certified mentors and strong support system.' },
  { name: 'Poonam Garg', rating: 5, review: 'Confidence and strategic thinking improved significantly.' },
  { name: 'Suhasini N', rating: 4, review: 'Structured coaching helped build strong interest in chess.' },
  { name: 'Sharath Sharu', rating: 5, review: 'Good teaching and care from trainers. My son is improving well.' },
  { name: 'Sreenu Vemula', rating: 5, review: 'Highly engaging classes with knowledgeable coaches.' },
  { name: 'Meenakshi Gairola', rating: 5, review: 'Great team and coaching. My son enjoys learning.' },
  { name: 'Lakshmi Maddi', rating: 4, review: 'My daughter enjoys classes and is steadily improving.' },
  { name: 'Kodeeswaran Malaimuthu', rating: 5, review: 'Professional and engaging teachers. Boosted confidence.' },
  { name: 'Satya Kumar', rating: 5, review: 'Coaches make chess fun and easy for kids.' },
  { name: 'Teju', rating: 4, review: 'Clear explanations and flexible schedules. Good experience.' },
  { name: 'Divya Muraleedharan', rating: 5, review: 'Well-structured and engaging classes.' },
  { name: 'Afreen Khan', rating: 5, review: 'Strong teaching structure with focus on strategies.' },
  { name: 'Aambikarani', rating: 5, review: 'Friendly and patient coaches. Kids enjoy sessions.' },
  { name: 'Saurabh Nahata', rating: 5, review: 'Good curriculum and visible progress in a short time.' },
  { name: 'Krishnan V', rating: 5, review: 'Flexible timings and knowledgeable mentors.' },
  { name: 'Rajnish Rawat', rating: 4, review: 'Structured platform to improve chess skills professionally.' },
  { name: 'Arpa Sen', rating: 5, review: 'Engaging sessions with visible progress.' },
  { name: 'Satya Manugula', rating: 5, review: 'Simple and fun teaching method for kids.' },
  { name: 'Praveen Kumar Reddy', rating: 5, review: 'Improved confidence, focus, and thinking skills.' },
  { name: 'Sunil Sahoo', rating: 4, review: 'Flexible classes with strong support and small groups.' },
  { name: 'Shaji Hamza', rating: 5, review: 'Great beginner program with clear teaching.' },
  { name: 'Prajakta Chandle', rating: 5, review: 'Good curriculum with tournaments to track progress.' },
  { name: 'Guru Raj V', rating: 5, review: 'Clear explanations and growing confidence.' },
  { name: 'Ashirwad Gujarathi', rating: 5, review: 'Interactive classes with personal attention.' },
  { name: 'Sarala Devi', rating: 5, review: 'Excellent training that builds interest and skills.' },
  { name: 'Indhu Kamal', rating: 4, review: 'Friendly teachers and supportive environment.' },
  { name: 'Nisha Manoharan', rating: 5, review: 'Well-structured classes that keep kids engaged.' },
  { name: 'Pradheep Elango', rating: 5, review: 'Top-quality teachers with great teaching methods.' },
]

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

const AVATAR_COLORS = [
  '#642B8F', '#F5C518', '#A020F0', '#FF6B35', '#1DA462',
  '#3B82F6', '#E11D48', '#0EA5E9', '#D97706', '#7C3AED',
]

function StarRating({ rating }) {
  return (
    <span className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`review-star${s <= rating ? ' filled' : ''}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
    </span>
  )
}

// Split reviews into two rows for the marquee
const ROW1 = REVIEWS.slice(0, Math.ceil(REVIEWS.length / 2))
const ROW2 = REVIEWS.slice(Math.ceil(REVIEWS.length / 2))

function MarqueeRow({ items, direction = 'left', colorOffset = 0 }) {
  // Duplicate so the scroll loops seamlessly
  const doubled = [...items, ...items]

  return (
    <div className={`marquee-track marquee-${direction}`}>
      <div className="marquee-inner">
        {doubled.map((r, i) => {
          const colorIdx = (i + colorOffset) % AVATAR_COLORS.length
          return (
            <div key={i} className="review-card">
              <div className="review-card-top">
                <div
                  className="review-avatar"
                  style={{ background: AVATAR_COLORS[colorIdx] }}
                >
                  {getInitials(r.name)}
                </div>
                <div className="review-meta">
                  <span className="review-name">{r.name}</span>
                  <StarRating rating={r.rating} />
                </div>
                <div className="google-badge">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>
              <p className="review-text">"{r.review}"</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="text-center testimonials-header">
          <h2 className="testimonials-heading">What Our Students' Parents Say</h2>
          <p className="testimonials-sub">Real reviews from real families on Google</p>
          <div className="rating-badge">
            <span className="stars">★★★★★</span>
            <span className="rating-text">4.8 / 5 &nbsp;·&nbsp; 391 Google Reviews</span>
          </div>
        </div>
      </div>

      <div
        className={`marquee-container${paused ? ' paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <MarqueeRow items={ROW1} direction="left" colorOffset={0} />
        <MarqueeRow items={ROW2} direction="right" colorOffset={5} />
      </div>

      <div className="google-link-wrap">
        <a
          href="https://www.google.com/search?q=MindMentorz+chess+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="google-link-btn"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="google-link-icon">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          View All Reviews on Google
        </a>
      </div>
    </section>
  )
}
