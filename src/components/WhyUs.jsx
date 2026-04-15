import './WhyUs.css'
import chessKidLearningImage from '../Kids enjoying ChessKid learning adventure.png'
import trainingSessionImage from '../Focused minds in a chess training session (1).png'

const typical = [
  'Random, unstructured learning',
  'No clear progress tracking',
  'Focus on casual play',
  'No tournament preparation',
  'Generic, one-size-fits-all approach',
]

const advantage = [
  'Structured Level-Based Curriculum',
  'ChessKid-Powered Learning System',
  'Tournament-Focused Training',
  'Measurable Performance Tracking',
  'Professional Coaching Environment',
]

const chesskidFeatures = [
  { icon: '🎯', text: 'Personal chess rating & identity' },
  { icon: '🎮', text: 'Gamified learning that keeps kids engaged' },
  { icon: '🧩', text: 'Access to 50,000+ structured puzzles' },
  { icon: '📱', text: 'Interactive lessons, bots & guided practice' },
  { icon: '📊', text: 'Performance reports & progress tracking' },
  { icon: '🏆', text: 'In-house tournaments and competitive play' },
]

const envFeatures = [
  { icon: '♟', text: 'FIDE-standard boards and chess clocks' },
  { icon: '🎮', text: 'Regular over-the-board practice games' },
  { icon: '🏆', text: 'Internal tournaments and match play' },
  { icon: '🏛', text: 'Structured and distraction-free environment' },
  { icon: '🔒', text: 'Fully monitored for safety and professionalism' },
]

export default function WhyUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="orb why-orb-1" />
      <div className="orb why-orb-2" />
      <div className="container">
        <div className="text-center">
          <div className="section-tag">⚔️ Why We're Different</div>
          <h2 className="section-title">The Only Chess Program That Combines<br />Digital Mastery + <span className="gold-accent">Real Competition</span></h2>
          <div className="divider divider-center" />
        </div>

        {/* Comparison */}
        <div className="why-comparison">
          <div className="comparison-card typical">
            <div className="comparison-header">
              <span className="comp-icon">❌</span>
              <h3>Typical Chess Classes</h3>
            </div>
            <ul>
              {typical.map(t => (
                <li key={t}><span className="comp-cross">✗</span> {t}</li>
              ))}
            </ul>
          </div>

          <div className="vs-badge">VS</div>

          <div className="comparison-card advantage">
            <div className="comparison-header">
              <span className="comp-icon">✅</span>
              <h3>MindMentorz Advantage</h3>
            </div>
            <ul>
              {advantage.map(a => (
                <li key={a}><span className="comp-check">✓</span> {a}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ChessKid Feature */}
        <div className="feature-block glass-card">
          <div className="feature-block-inner">
            <div className="feature-text">
              <div className="section-tag">♟ ChessKid-Powered Learning</div>
              <h3>Your Child's Competitive Edge</h3>
              <p>Your child doesn't just attend classes — they enter a complete chess ecosystem:</p>
              <ul className="feature-list">
                {chesskidFeatures.map(f => (
                  <li key={f.text}><span>{f.icon}</span> {f.text}</li>
                ))}
              </ul>
              <div className="feature-result">
                👉 <strong>Result:</strong> Faster improvement and stronger retention
              </div>
            </div>
            <div className="feature-visual chesskid-visual">
              <div className="feature-image-frame">
                <img
                  src={chessKidLearningImage}
                  alt="Kids enjoying ChessKid learning adventure"
                  className="feature-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Environment */}
        <div className="feature-block glass-card" style={{ marginTop: '20px' }}>
          <div className="feature-block-inner">
            <div className="feature-visual env-visual">
              <div className="feature-image-frame">
                <img
                  src={trainingSessionImage}
                  alt="Focused minds in a chess training session"
                  className="feature-image"
                />
              </div>
            </div>
            <div className="feature-text">
              <div className="section-tag">🏟 Professional Environment</div>
              <h3>We Go Beyond Online Learning</h3>
              <p>We build real competitors through structured, real-world practice:</p>
              <ul className="feature-list">
                {envFeatures.map(f => (
                  <li key={f.text}><span>{f.icon}</span> {f.text}</li>
                ))}
              </ul>
              <div className="feature-result">
                👉 <strong>Result:</strong> Students gain real tournament confidence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
