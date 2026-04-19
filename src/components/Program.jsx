import './Program.css'
import { useState } from 'react'
import {
  CalendarDays,
  BookOpen,
  Puzzle,
  Award,
  Trophy,
  BarChart2,
  Clock,
  Target,
  CheckCircle2,
  BookMarked,
} from 'lucide-react'

const levels = [
  {
    piece: '♙',
    level: 'Level 1',
    name: 'Absolute Beginner',
    tagline: 'Play legal games independently with basic awareness',
    color: '#F8A213',
    sessions: '24 Sessions',
    topics: [
      'Board setup (files, ranks, square colors)',
      'Piece movement rules (all pieces)',
      'Capturing and piece interaction',
      'Check, checkmate, stalemate (clear understanding)',
      'Castling, en passant, pawn promotion',
      'Piece values and basic exchanges',
      'Board vision (identifying attacked squares)',
      'Identifying hanging pieces',
      'One-move blunder prevention',
    ],
    outcome: 'Play legal games independently with basic awareness',
  },
  {
    piece: '♘',
    level: 'Level 2',
    name: 'Lower Beginner',
    tagline: 'Apply basic principles and spot simple tactics',
    color: '#F8A213',
    sessions: '30 Sessions',
    topics: [
      'Opening principles (center, development, king safety)',
      'Good moves vs random moves',
      'Forks (knight and pawn forks)',
      'Pins (absolute and relative)',
      'Skewers',
      'Basic mating patterns (back rank, ladder mate)',
      'Pawn structures (chains, weaknesses)',
      'Counting attackers vs defenders',
      'Identifying opponent threats',
      'Solving 1–2 move tactics',
      'Avoiding common beginner mistakes',
      'Basic notation understanding',
    ],
    outcome: 'Apply basic principles and spot simple tactics',
  },
  {
    piece: '♗',
    level: 'Level 3',
    name: 'Upper Beginner',
    tagline: 'Ready for school/district-level tournaments',
    color: '#F8A213',
    sessions: '36 Sessions',
    topics: [
      'Discovered attacks',
      'Double attacks and combinations',
      'Removing the defender',
      'Trapped pieces',
      '2–3 move calculation',
      'Forcing moves (checks, captures, threats)',
      'Opening traps and punishments',
      'Piece coordination',
      'Pawn weaknesses (isolated, doubled, backward)',
      'King and pawn endgames (opposition)',
      'Basic rook activity',
      'Time management in games',
    ],
    outcome: 'Ready for school/district-level tournaments',
  },
  {
    piece: '♖',
    level: 'Level 4',
    name: 'Lower Intermediate',
    tagline: 'Perform confidently in competitive tournaments',
    color: '#F8A213',
    sessions: '40 Sessions',
    topics: [
      '3–5 move calculation accuracy',
      'Candidate move selection',
      'Deflection and decoy tactics',
      'Interference and clearance themes',
      'Open files and rook activity',
      'Outposts and strong squares',
      'Pawn breaks and pawn majorities',
      'Opening to middlegame transition',
      'Middlegame planning (attack vs improve vs simplify)',
      'Rook endgames (Lucena & Philidor)',
      'Position evaluation techniques',
      'Self-game analysis',
    ],
    outcome: 'Perform confidently in competitive tournaments',
  },
  {
    piece: '♕',
    level: 'Level 5',
    name: 'Upper Intermediate',
    tagline: 'Strong performance at state/national-level tournaments',
    color: '#F8A213',
    sessions: '48 Sessions',
    topics: [
      'Deep calculation (5+ moves, multiple lines)',
      'Visualization training',
      'Attacking castled king (pawn storms, sacrifices)',
      'Defensive techniques in worse positions',
      'Opening repertoire building (White & Black)',
      'Understanding imbalances (bishop vs knight, structure)',
      'Exchange decisions (when to trade pieces)',
      'Advanced rook endgames',
      'Minor piece endgames',
      'Decision-making under time pressure',
      'Engine-based game analysis',
      'Tournament preparation strategy',
    ],
    outcome: 'Strong performance at state/national-level tournaments',
  },
  {
    piece: '♔',
    level: 'Level 6',
    name: 'Advanced (FIDE Track)',
    tagline: 'Achieve and improve FIDE rating',
    color: '#F8A213',
    sessions: '60 Sessions',
    topics: [
      'Master-level calculation',
      'Advanced opening preparation (deep lines & ideas)',
      'Long-term middlegame strategy',
      'Prophylaxis (preventing opponent plans)',
      'Conversion of winning positions',
      'Defensive resource finding',
      'Advanced theoretical endgames',
      'Opponent preparation methods',
      'Psychological training (focus, tilt control)',
      'Time management for classical formats',
      'Master game analysis',
      'Professional tournament routines',
    ],
    outcome: 'Achieve and improve FIDE rating',
  },
]

const features = [
  { Icon: CalendarDays, text: '24–60 Sessions per Level' },
  { Icon: BookOpen, text: '150+ ChessKid Assignments' },
  { Icon: Puzzle, text: '50,000+ Curated Puzzles from Database' },
  { Icon: Award, text: 'Monthly Leaderboards' },
  { Icon: Trophy, text: 'Monthly Tournaments (Online & Offline)' },
  { Icon: BarChart2, text: 'Assessment Reports' },
  { Icon: Clock, text: '24/7 Platform Access' },
]

export default function Program() {
  const [active, setActive] = useState(0)
  const lvl = levels[active]

  const slideLevel = (direction) => {
    setActive((prev) => {
      let next = prev + direction
      if (next < 0) next = levels.length - 1
      if (next >= levels.length) next = 0
      return next
    })
  }

  return (
    <section className="section program-section" id="program">
      <div className="orb program-orb-1" />
      <div className="container">

        {/* Header */}
        <div className="text-center">
          <div className="section-tag">
            <BookMarked size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            Structured Curriculum
          </div>
          <h2 className="section-title">A Clear Path from Beginner<br />to Tournament Player</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle program-sub" style={{ margin: '0 auto 48px' }}>
            Every level builds real skills required for competitive chess — step by step, no gaps.
          </p>
        </div>

        {/* Level Tabs */}
        <div className="level-tabs">
            {levels.map((l, i) => (
              <button
                key={i}
                className={`level-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--tab-color': l.color }}
              >
                <span className="tab-piece">{l.piece}</span>
                <span className="tab-num">Level {i + 1}</span>
                <span className="tab-name">{l.name}</span>
              </button>
            ))}
          </div>

        {/* Level Detail Card */}
        <div className="programs-carousel-container">
          <button className="programs-side-arrow left" onClick={() => slideLevel(-1)} aria-label="Previous Level">‹</button>
          <button className="programs-side-arrow right" onClick={() => slideLevel(1)} aria-label="Next Level">›</button>

          <div className="level-detail glass-card" key={active} style={{ '--lvl-color': lvl.color }}>
          {/* Left: icon + meta */}
          <div className="level-detail-left">
            <div className="level-piece-big" style={{ color: lvl.color, filter: `drop-shadow(0 0 24px ${lvl.color}80)` }}>
              {lvl.piece}
            </div>
            <div className="level-meta">
              <div className="level-badge" style={{ color: lvl.color, borderColor: lvl.color + '55', background: lvl.color + '18' }}>
                {lvl.level}
              </div>
              <div className="level-sessions-chip">
                <Clock size={14} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                {lvl.sessions}
              </div>
            </div>
            <div className="level-outcome-box" style={{ borderColor: lvl.color + '55', background: lvl.color + '12' }}>
              <div className="outcome-label">
                <Target size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                Outcome
              </div>
              <div className="outcome-text">{lvl.outcome}</div>
            </div>
            <a href="#journey" className="btn-primary level-enroll-btn">
              <span>Enroll Now →</span>
            </a>
          </div>

          {/* Right: topics */}
          <div className="level-detail-right">
            <h3 className="level-full-name">
              {lvl.piece} {lvl.level} — {lvl.name}
            </h3>
            <p className="level-tagline">{lvl.tagline}</p>
            <div className="topics-label">Key Topics</div>
            <ul className="level-topics">
              {lvl.topics.map((t, i) => (
                <li key={i}>
                  <span className="topic-dot" style={{ background: lvl.color }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>

        {/* Progress Path */}
        <div className="level-path">
          {levels.map((l, i) => (
            <div key={i} className={`path-step ${i <= active ? 'done' : ''}`} style={{ '--step-color': l.color }}>
              <button
                className="path-node"
                onClick={() => setActive(i)}
                title={l.name}
                style={i <= active ? { background: l.color + '22', borderColor: l.color, boxShadow: `0 0 12px ${l.color}55` } : {}}
              >
                {l.piece}
              </button>
              {i < levels.length - 1 && (
                <div className="path-line" style={i < active ? { background: `linear-gradient(90deg, ${l.color}, ${levels[i + 1].color})` } : {}} />
              )}
            </div>
          ))}
        </div>
        <div className="path-labels">
          {levels.map((l, i) => (
            <span key={i} className={`path-label ${i === active ? 'active-label' : ''}`} style={i === active ? { color: l.color } : {}}>
              L{i + 1}
            </span>
          ))}
        </div>

        {/* Program Features */}
        <div className="program-features">
          <h3 className="program-feat-title">
            <CheckCircle2 size={18} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8, color: '#F8A213' }} />
            Program Features — All Levels
          </h3>
          <div className="features-grid">
            {features.map(f => (
              <div key={f.text} className="feature-chip glass-card">
                <span className="feature-chip-icon">
                  <f.Icon size={18} strokeWidth={1.75} />
                </span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="program-bottom-cta">
          <p className="program-cta-text">Start Your Child's Chess Journey Today</p>
          <a href="#journey" className="btn-primary">
            <span>Enroll Now →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
