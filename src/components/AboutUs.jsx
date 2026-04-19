import { useState, useEffect, useRef } from 'react'
import './AboutUs.css'
import {
  Target, Zap, Lightbulb, Trophy, Brain, Medal, Globe2,
  TrendingUp, HeartPulse, Crown, BarChart2, Gamepad2,
  School, Crown as KingIcon, Hash, BookOpen, LineChart,
  Building2, Monitor, Laptop2, MapPin
} from 'lucide-react'

/* ── Intersection-observer reveal ── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ══════════════════════════════════════════
   1. HERO  — cinematic, full-bleed
══════════════════════════════════════════ */
function AboutHero() {
  return (
    <section className="au-hero" id="about-hero">
      <div className="hud-line hud-h1" /><div className="hud-line hud-h2" /><div className="hud-line hud-v1" />
      <div className="hud-circle hud-c1" /><div className="hud-circle hud-c2" />

      <div className="hud-label hud-label-1 hud-desktop-only">FIDE ANALYSIS</div>
      <div className="hud-label hud-label-2 hud-desktop-only">MOVE: Rook → e5</div>

      <div className="container au-hero-content">
        {/* Tag pulled below navbar with margin-top instead of padding-top */}
        <div className="au-hero-tag">
          <span>♟</span>&nbsp;Since 2017 &nbsp;·&nbsp; About MindMentorz
        </div>
        <h1 className="au-hero-headline">
          We Don't Just <span className="au-gold">Teach a Game.</span><br />
          We Build <span className="au-purple">Competitors.</span>
        </h1>
        <p className="au-hero-sub">
          Since 2017, MindMentorz has been bridging the gap between "knowing how the pieces move"
          and "winning under pressure."
        </p>
        <p className="au-hero-hook">
          Most academies teach chess as a hobby.{' '}
          <strong>We treat it as a discipline.</strong>
        </p>
        <a href="https://skuare.mindmentorz.com/parent-login" target="_blank"
          rel="noopener noreferrer" className="btn-primary au-hero-cta">
          <span>Book a Free Assessment &amp; Trial →</span>
        </a>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   2. ORIGIN STORY — Premium redesign
══════════════════════════════════════════ */
const milestones = [
  { year: '2017', Icon: MapPin, dotColor: '#F8A213', label: 'The Beginning', desc: 'Started in Bangalore with 8 students and a vision.' },
  { year: '2019', Icon: TrendingUp, dotColor: '#009B77', label: 'City-Wide Expansion', desc: 'Grew to 50+ batches across multiple Indian cities.' },
  { year: '2021', Icon: Globe2, dotColor: '#3B5BDB', label: 'Went Global', desc: 'Launched online & reached students in 10+ countries.' },
  { year: 'Now', Icon: Crown, dotColor: '#F8A213', label: 'FIDE Standard Achieved', desc: '6-level program, 1,500+ students worldwide.', active: true },
]

const storyCards = [
  {
    num: '01', color: '#642b8f', bg: 'linear-gradient(135deg,#642b8f22,#642b8f08)',
    Icon: Target, title: 'The Gap Identified',
    body: "Many kids play chess — but don't compete. A massive gap existed between casual play and FIDE-level performance."
  },
  {
    num: '02', color: '#F8A213', bg: 'linear-gradient(135deg,#F8A21322,#F8A21308)',
    Icon: Zap, title: 'The Problem',
    body: 'Without structure, students plateau. The leap from beginner to tournament player was steep, unguided and discouraging.'
  },
  {
    num: '03', color: '#009B77', bg: 'linear-gradient(135deg,#009B7722,#009B7708)',
    Icon: Lightbulb, title: 'The Solution',
    body: 'Build a structured, measurable curriculum — combining FIDE-level coaching with cutting-edge digital analytics tools.'
  },
  {
    num: '04', color: '#3B5BDB', bg: 'linear-gradient(135deg,#3B5BDB22,#3B5BDB08)',
    Icon: Trophy, title: 'The Mission',
    body: "Create a chess academy as serious as any elite sports academy — where every student's progress is tracked and celebrated."
  },
]

function OriginStory() {
  return (
    <section className="au-origin-section" id="about-origin">
      {/* Section heading — full width */}
      <div className="au-origin-head-wrap">
        <Reveal className="text-center">
          <div className="section-tag">◉ The 2017 Shift</div>
          <h2 className="au-origin-title">How MindMentorz Was Born</h2>
          <p className="au-origin-intro">
            One bold question: <em>"Why do so many kids know how to move the pieces — but none know how to win?"</em>
          </p>
        </Reveal>
      </div>

      <div className="container">
        <div className="au-origin-main-grid">

          {/* LEFT — Vertical timeline */}
          <Reveal>
            <div className="au-timeline-card">
              {/* Decorative chess board corner */}
              <div className="au-tl-chess-corner">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className={`au-tl-cell ${(Math.floor(i / 3) + i) % 2 === 0 ? 'dark' : 'light'}`} />
                ))}
              </div>

              <div className="au-tl-label">OUR JOURNEY</div>

              {/* Vertical timeline */}
              <div className="au-timeline">
                <div className="au-tl-line" />
                {milestones.map((m, i) => (
                  <div className="au-tl-item" key={m.year} style={{ animationDelay: `${i * 150}ms` }}>
                    <div
                      className="au-tl-dot"
                      style={{
                        background: m.dotColor,
                        borderColor: m.dotColor,
                        boxShadow: `0 0 16px ${m.dotColor}99`,
                      }}
                    >
                      <m.Icon
                        size={16}
                        strokeWidth={2}
                        style={{ color: '#1a0638' }}
                      />
                    </div>
                    <div className="au-tl-content">
                      <div className="au-tl-year">{m.year}</div>
                      <div className="au-tl-milestone">{m.label}</div>
                      <div className="au-tl-desc">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom quote */}
              <div className="au-tl-quote">"From 8 students to 1,500+. From one city to the world."</div>
            </div>
          </Reveal>

          {/* RIGHT — 2×2 story cards grid */}
          <div className="au-story-cards-grid">
            {storyCards.map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div className="au-story-card" style={{ '--sc-color': s.color, background: s.bg }}>
                  <div className="au-sc-top">
                    <div className="au-sc-num" style={{ color: s.color }}>{s.num}</div>
                    <div className="au-sc-icon-badge" style={{ background: s.color + '22', borderColor: s.color + '44', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <s.Icon size={22} strokeWidth={1.75} style={{ color: s.color }} />
                    </div>
                  </div>
                  <h4 className="au-sc-title" style={{ color: s.color }}>{s.title}</h4>
                  <p className="au-sc-body">{s.body}</p>
                  <div className="au-sc-bar" style={{ background: s.color }} />
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   3. PHILOSOPHY — 3D flip cards
══════════════════════════════════════════ */
const pillars = [
  {
    num: '01', title: 'The Analytical Mind', Icon: Brain,
    gradient: 'linear-gradient(135deg,#642b8f,#9b3dc0)',
    tagline: 'Train the mind first.',
    points: ['ChessKid ecosystem — 50,000+ puzzles', 'Adaptive difficulty per student', 'Continuous learning beyond class hours'],
  },
  {
    num: '02', title: 'The Tournament Heart', Icon: Medal,
    gradient: 'linear-gradient(135deg,#F8A213,#f0ba6f)',
    tagline: 'Compete to grow.',
    points: ['Real FIDE-condition training', 'FIDE-standard clocks & formats', 'Confidence through structured exposure'],
  },
  {
    num: '03', title: 'The FIDE Standard', Icon: Globe2,
    gradient: 'linear-gradient(135deg,#1a0638,#3b0d7e)',
    tagline: 'Measure everything.',
    points: ['6-Level Mastery Program', 'Mapped to international benchmarks', 'Trackable, measurable progress always'],
  },
]

function Philosophy() {
  return (
    <section className="au-section au-philosophy" id="about-philosophy">
      <div className="container">
        <Reveal className="text-center au-sec-head">
          <div className="section-tag">◈ Our Philosophy</div>
          <h2 className="section-title">The Three Pillars of Mastery</h2>
          <p className="section-subtitle au-sub-center">
            Every student, every session, every tournament — measured against three non-negotiable pillars.
          </p>
        </Reveal>

        <div className="au-pillars-grid">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 130}>
              {/* 3D flip card */}
              <div className="au-flip-card" tabIndex={0}>
                <div className="au-flip-inner">
                  {/* FRONT */}
                  <div className="au-flip-front" style={{ background: p.gradient }}>
                    <div className="au-flip-num">{p.num}</div>
                    <div className="au-flip-icon"><p.Icon size={40} strokeWidth={1.5} /></div>
                    <h3>{p.title}</h3>
                    <p className="au-flip-tagline">{p.tagline}</p>
                    <div className="au-flip-hint">Hover to explore ↗</div>
                  </div>
                  {/* BACK */}
                  <div className="au-flip-back">
                    <div className="au-flip-back-icon"><p.Icon size={34} strokeWidth={1.5} /></div>
                    <h4>{p.title}</h4>
                    <ul>
                      {p.points.map((pt, j) => (
                        <li key={j}><span className="au-check">✦</span>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   4. FOUNDERS
══════════════════════════════════════════ */
function Founders() {
  return (
    <section className="au-section au-founders" id="about-founders">
      <div className="au-founders-bg-orb" />
      <div className="container">
        <Reveal className="text-center au-sec-head">
          <div className="section-tag">♞ Meet the Architects</div>
          <h2 className="section-title">Physical Chessboard to Digital Chessboard</h2>
        </Reveal>

        <Reveal>
          <div className="au-founders-combined-card glass-card">
            {/* Single shared image placeholder */}
            <div className="au-founders-img-placeholder">
              <img
                src="/founders.jpg"
                alt="Praveen Sagar and Neil Philip"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-lg)' }}
              />
            </div>

            {/* Divider */}
            <div className="divider divider-center" style={{ margin: '28px auto 24px' }} />

            {/* Both founders listed side by side */}
            <div className="au-founders-names-row">
              <div className="au-founder-name-block">
                <h3 className="au-founder-name">Neil Philip</h3>
              </div>

              <div className="au-founders-names-sep">
                <div className="au-names-sep-line" />
                <span className="au-names-amp">&amp;</span>
                <div className="au-names-sep-line" />
              </div>

              <div className="au-founder-name-block">
                <h3 className="au-founder-name">Praveen Sagar</h3>
              </div>
            </div>

            {/* Body text */}
            <p className="au-founders-body">
              At MindMentorz, we look at a chessboard and see more than 64 squares. We see a training ground for life,
              where a child learns to handle defeat with grace, victory with humility, and complex problems with cold logic.
              Our goal was to move away from the 'casual' approach to chess and provide Indian students with the same
              structured excellence found in elite Russian or European chess schools.
            </p>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   5. ANTI-SYLLABUS
══════════════════════════════════════════ */
const dont = ['Teach tricks or cheap traps', 'Use generic one-size lessons', 'Keep kids stagnant at one level', 'Treat chess as a boring subject']
const doList = ['Build deep positional understanding', 'Use data-driven, adaptive learning', 'Ensure measurable tracked progress', 'Treat chess as a competitive sport']

function AntiSyllabus() {
  return (
    <section className="au-section au-antisyllabus" id="about-antisyllabus">
      <div className="container">
        <Reveal className="text-center au-sec-head">
          <div className="section-tag">⚔ Our Approach</div>
          <h2 className="section-title">The Anti-Syllabus</h2>
          <p className="section-subtitle au-sub-center">We built MindMentorz by first deciding what we would <em>never</em> do.</p>
        </Reveal>
        <Reveal>
          <div className="au-antisyl-grid">
            <div className="au-antisyl-col dont">
              <div className="au-antisyl-header"><span className="au-antisyl-icon dont-icon">✗</span><h3>We DON'T</h3></div>
              <ul>{dont.map((it, i) => <li key={i}><span className="au-x-mark">✗</span><span>{it}</span></li>)}</ul>
            </div>
            <div className="au-antisyl-vs">
              <div className="au-vs-line" /><span className="au-vs-badge">VS</span><div className="au-vs-line" />
            </div>
            <div className="au-antisyl-col do-col">
              <div className="au-antisyl-header"><span className="au-antisyl-icon do-icon">✓</span><h3>We DO</h3></div>
              <ul>{doList.map((it, i) => <li key={i}><span className="au-check-mark">✓</span><span>{it}</span></li>)}</ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   6. GLOBAL FOOTPRINT — animated world map
══════════════════════════════════════════ */
const globalStats = [
  { value: '2017', label: 'Founded' },
  { value: '10+', label: 'Countries' },
  { value: '2,500+', label: 'Students' },
  { value: '6', label: 'Mastery Levels' },
]

const mapMarkers = [
  { label: 'India', xPct: 65, yPct: 47, hq: true },
  { label: 'UAE', xPct: 59, yPct: 44 },
  { label: 'UK', xPct: 46, yPct: 30 },
  { label: 'USA', xPct: 18, yPct: 38 },
  { label: 'Canada', xPct: 19, yPct: 24 },
  { label: 'Singapore', xPct: 71, yPct: 57 },
  { label: 'Australia', xPct: 76, yPct: 68 },
  { label: 'Germany', xPct: 50, yPct: 30 },
  { label: 'South Africa', xPct: 51, yPct: 64 },
]

const countryCards = [
  { code: 'IN', name: 'India', status: 'Headquarters', color: '#FF6B35' },
  { code: 'AE', name: 'UAE', status: 'Active', color: '#009B77' },
  { code: 'US', name: 'USA', status: 'Active', color: '#3B5BDB' },
  { code: 'GB', name: 'UK', status: 'Active', color: '#C92A2A' },
  { code: 'CA', name: 'Canada', status: 'Active', color: '#E03131' },
  { code: 'SG', name: 'Singapore', status: 'Active', color: '#D6336C' },
  { code: 'AU', name: 'Australia', status: 'Active', color: '#F59F00' },
  { code: 'DE', name: 'Germany', status: 'Active', color: '#364FC7' },
  { code: 'ZA', name: 'South Africa', status: 'Active', color: '#2F9E44' },
  { code: '10+', name: 'Countries', status: '& Growing', color: '#642b8f' },
]

function GlobalMap() {
  return (
    <div className="au-world-map-container">
      <div className="au-world-map-wrap">
        {/* Real world map image as background */}
        <div className="au-world-bg" />
        {/* Dark purple tint overlay */}
        <div className="au-world-tint" />

        {/* CSS-positioned animated pin dots */}
        {mapMarkers.map((m) => (
          <div
            key={m.label}
            className={`au-map-pin ${m.hq ? 'hq' : ''}`}
            style={{ left: `${m.xPct}%`, top: `${m.yPct}%` }}
          >
            <div className="au-pin-ring r1" />
            <div className="au-pin-ring r2" />
            <div className="au-pin-core" />
            <span className="au-pin-label">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="au-map-stats-bar">
        {globalStats.map((s, i) => (
          <div key={s.label} className="au-ms-item">
            <span className="au-ms-val">{s.value}</span>
            <span className="au-ms-lbl">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GlobalFootprint() {
  return (
    <section className="au-section au-global" id="about-global">
      <div className="container">
        <Reveal className="text-center au-sec-head">
          <div className="section-tag">
            <Globe2 size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            Global Reach
          </div>
          <h2 className="section-title">A Global Footprint,<br />One Consistent Method</h2>
          <p className="section-subtitle au-sub-center">
            Started in 2017, expanded to 10+ countries. Our hybrid model delivers
            <strong> Structure. Measurement. Mastery.</strong> everywhere.
          </p>
        </Reveal>

        {/* World map */}
        <Reveal><GlobalMap /></Reveal>


        {/* Physical + Digital */}
        <Reveal>
          <div className="au-hybrid-pills">
            <div className="au-hybrid-pill">
              <span className="au-hybrid-emoji" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <Building2 size={28} strokeWidth={1.5} />
              </span>
              <div><strong>Physical</strong><p>Smart classrooms with FIDE clocks &amp; CCTV</p></div>
            </div>
            <div className="au-hybrid-arrow">+</div>
            <div className="au-hybrid-pill">
              <span className="au-hybrid-emoji" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F8A213' }}>
                <Laptop2 size={28} strokeWidth={1.5} />
              </span>
              <div><strong>Digital</strong><p>ChessKid platform, live sessions &amp; analytics</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   7. CALL TO ACTION
══════════════════════════════════════════ */
function AboutCTA() {
  return (
    <section className="au-cta-section" id="about-cta">
      <div className="au-cta-bg-layer" />
      <div className="container au-cta-inner">
        <Reveal className="text-center">
          <div className="au-cta-chess-icon">♛</div>
          <h2 className="au-cta-headline">Your Child's FIDE Journey<br />Starts with a <span className="au-gold">Single Move.</span></h2>
          <p className="au-cta-sub">Join 1,500+ students progressing beyond basics</p>
          <a href="https://skuare.mindmentorz.com/parent-login" target="_blank"
            rel="noopener noreferrer" className="btn-primary au-cta-big-btn" id="about-cta-btn">
            <span>Book a Free Assessment &amp; Trial</span>
          </a>
          <p className="au-cta-guarantee">✦ No commitment required · FIDE-level assessment included</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   8. SOUL OF THE GAME
══════════════════════════════════════════ */
const soulPoints = [
  { Icon: Crown, color: '#F8A213', bg: 'rgba(248,162,19,0.12)', title: 'Competitive Sport', desc: 'Chess at MindMentorz is a competitive discipline — not a hobby.' },
  { Icon: Globe2, color: '#3B5BDB', bg: 'rgba(59,91,219,0.12)', title: 'FIDE Standards', desc: 'Every curriculum element is mapped to international FIDE benchmarks.' },
  { Icon: TrendingUp, color: '#009B77', bg: 'rgba(0,155,119,0.12)', title: '6-Level Progression', desc: 'Structured program from absolute beginner to FIDE-rated competitor.' },
  { Icon: HeartPulse, color: '#E03131', bg: 'rgba(224,49,49,0.12)', title: 'Holistic Coaching', desc: 'Psychology, competitive mindset and resilience — beyond just moves.' },
]
function SoulOfGame() {
  return (
    <section className="au-section au-soul" id="about-soul">
      <div className="container">
        <Reveal className="text-center au-sec-head">
          <div className="section-tag">♔ Philosophy</div>
          <h2 className="section-title">Ancient Wisdom.<br />Modern Athletes.</h2>
          <p className="section-subtitle au-sub-center">A 6th-century game played at a 21st-century level.</p>
        </Reveal>
        <div className="au-soul-grid">
          {soulPoints.map((sp, i) => (
            <Reveal key={sp.title} delay={i * 100}>
              <div className="au-soul-card glass-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 16, background: sp.bg, color: sp.color, margin: '0 auto 16px', boxShadow: `0 4px 16px ${sp.color}33`, transition: 'transform 0.3s ease' }}>
                  <sp.Icon size={28} strokeWidth={1.75} />
                </div>
                <h3>{sp.title}</h3><p>{sp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   9. TECH ECOSYSTEM — premium data dashboard
══════════════════════════════════════════ */
const weeklyData = [
  { day: 'Mon', puzzles: 42 }, { day: 'Tue', puzzles: 58 }, { day: 'Wed', puzzles: 35 },
  { day: 'Thu', puzzles: 71 }, { day: 'Fri', puzzles: 64 }, { day: 'Sat', puzzles: 89 }, { day: 'Sun', puzzles: 76 },
]
const progressBars = [
  { label: 'Puzzle Accuracy', pct: 92, color: '#F8A213' },
  { label: 'Tactical Rating', pct: 87, color: '#9b3dc0' },
  { label: 'Opening Repertoire', pct: 78, color: '#009B77' },
  { label: 'Endgame Mastery', pct: 84, color: '#3B5BDB' },
]
const heatmapColors = [
  '#2F9E44', '#642b8f', '#F8A213', '#2F9E44', '#9b3dc0',
  '#3B5BDB', '#F8A213', '#642b8f', '#2F9E44', '#F59F00',
  '#9b3dc0', '#2F9E44', '#3B5BDB', '#F8A213', '#642b8f',
  '#2F9E44', '#9b3dc0', '#F59F00', '#3B5BDB', '#2F9E44',
]
const heatmapPct = [85, 40, 92, 60, 72, 45, 88, 55, 70, 80, 35, 91, 65, 78, 48, 93, 62, 50, 83, 67]

function DataDashboard() {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`au-dashboard ${visible ? 'au-dash-visible' : ''}`}>
      {/* Chrome bar */}
      <div className="au-dash-header">
        <div className="au-dash-dot red" />
        <div className="au-dash-dot yellow" />
        <div className="au-dash-dot green" />
        <span className="au-dash-title">MindMentorz Analytics · Student Dashboard</span>
        <span className="au-dash-live">● LIVE</span>
      </div>

      {/* Top KPI row */}
      <div className="au-dash-kpis">
        {[{ v: '92%', l: 'Accuracy' }, { v: '1,847', l: 'Puzzles Solved' }, { v: '#4', l: 'Leaderboard' }, { v: 'Level 4', l: 'Mastery' }].map(k => (
          <div className="au-kpi" key={k.l}>
            <span className="au-kpi-val">{k.v}</span>
            <span className="au-kpi-lbl">{k.l}</span>
          </div>
        ))}
      </div>

      {/* Main body: bar chart + progress + heatmap */}
      <div className="au-dash-body">
        {/* LEFT — progress bars only */}
        <div className="au-dash-left">
          <div className="au-progress-list">
            {progressBars.map((b) => (
              <div className="au-progress-item" key={b.label}>
                <div className="au-progress-meta">
                  <span>{b.label}</span><span style={{ color: b.color }}>{b.pct}%</span>
                </div>
                <div className="au-progress-track">
                  <div className="au-progress-fill"
                    style={{ width: visible ? `${b.pct}%` : '0%', background: b.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — heatmap + counters */}
        <div className="au-dash-right">
          <div className="au-heatmap-title">Puzzle Activity Heatmap</div>
          <div className="au-heatmap">
            {heatmapPct.map((v, i) => (
              <div key={i} className="au-heatmap-cell"
                style={{
                  background: heatmapColors[i],
                  opacity: visible ? (v / 100).toFixed(2) : 0,
                  animationDelay: `${i * 45}ms`,
                }}
                title={`${v}% activity`}
              />
            ))}
          </div>

          <div className="au-dash-counters">
            <div className="au-counter-card">
              <span className="au-counter-val">50K+</span>
              <span className="au-counter-lbl">Puzzles</span>
            </div>
            <div className="au-counter-card">
              <span className="au-counter-val">250</span>
              <span className="au-counter-lbl">Lessons</span>
            </div>
            <div className="au-counter-card">
              <span className="au-counter-val">98%</span>
              <span className="au-counter-lbl">Retention</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const techFeatures = [
  { Icon: Crown, color: '#642b8f', bg: 'rgba(100,43,143,0.12)', title: 'ChessKid Integration', desc: "Full ChessKid.com ecosystem — the world's leading chess learning platform." },
  { Icon: Hash, color: '#3B5BDB', bg: 'rgba(59,91,219,0.12)', title: '50,000+ Puzzles', desc: 'Adaptive puzzle engine that continuously challenges each student at their exact level.' },
  { Icon: BookOpen, color: '#009B77', bg: 'rgba(0,155,119,0.12)', title: '250 Lessons', desc: 'Lesson library professionally designed and mapped to our 6-level mastery program.' },
  { Icon: BarChart2, color: '#F8A213', bg: 'rgba(248,162,19,0.12)', title: 'Analytics & Reports', desc: 'Track every move, blunder, and pattern. Detailed performance reports.' },
  { Icon: Gamepad2, color: '#D6336C', bg: 'rgba(214,51,108,0.12)', title: 'Gamification', desc: 'XP, levels, badges and leaderboards keep students engaged and motivated.' },
  { Icon: School, color: '#0C8599', bg: 'rgba(12,133,153,0.12)', title: 'Smart Classrooms', desc: 'CCTV, FIDE-standard clocks, digital whiteboards and tournament setups.' },
]

function TechEcosystem() {
  return (
    <section className="au-section au-tech" id="about-tech">
      <div className="au-tech-bg" />
      <div className="container">
        <Reveal className="text-center au-sec-head">
          <div className="section-tag">⚡ Technology</div>
          <h2 className="section-title">Chess Accelerated by Data</h2>
          <p className="section-subtitle au-sub-center">
            Most academies use Zoom. We use an Ecosystem. Every session, every puzzle, every move — analysed and optimised.
          </p>
        </Reveal>



        {/* Feature cards */}
        <div className="au-tech-grid" style={{ marginTop: '48px' }}>
          {techFeatures.map((tf, i) => (
            <Reveal key={tf.title} delay={i * 75}>
              <div className="au-tech-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 16, background: tf.bg, color: tf.color, margin: '0 auto 16px', boxShadow: `0 4px 16px ${tf.color}33`, position: 'relative', transition: 'transform 0.3s ease' }}>
                  <tf.Icon size={26} strokeWidth={1.75} />
                  <div className="au-tech-ring" />
                </div>
                <h4>{tf.title}</h4><p>{tf.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   10. FUSION
══════════════════════════════════════════ */
function FusionSection() {
  return (
    <section className="au-section au-fusion" id="about-fusion">
      <div className="container">
        {/* Heading */}
        <Reveal className="text-center au-sec-head">
          <div className="section-tag">◉ The Best of Both Worlds</div>
          <h2 className="section-title">The Fusion That Changes Everything</h2>
          <p className="section-subtitle au-sub-center">
            Why choose between traditional coaching and digital self-study? MindMentorz is the fusion.
            We give your child the emotional intelligence of a coached athlete and the analytical power
            of a modern chess engine.
          </p>
        </Reveal>

        {/* Premium two-panel card */}
        <Reveal>
          <div className="au-fusion-wrap">

            {/* LEFT — Human Intelligence */}
            <div className="au-fusion-panel left-panel">
              <div className="au-fp-header">
                <div className="au-fp-icon-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 14, background: 'rgba(100,43,143,0.15)', color: '#642b8f', boxShadow: '0 4px 16px rgba(100,43,143,0.25)', flexShrink: 0 }}>
                  <Brain size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="au-fp-label">PILLAR 01</div>
                  <h3 className="au-fp-title">Human Intelligence</h3>
                </div>
              </div>
              <p className="au-fp-desc">
                World-class coaches bring experience, empathy, competitive psychology
                and tailored strategy to every single session.
              </p>
              <ul className="au-fp-list">
                {['FIDE-certified coaches', '1-on-1 adaptive coaching', 'Competitive mindset training', 'Psychology & emotional control', 'Tournament preparation'].map(f => (
                  <li key={f}><span className="au-fp-check">✦</span>{f}</li>
                ))}
              </ul>
              <div className="au-fp-tags">
                <span>FIDE Certified</span><span>Psychology</span><span>Mindset</span>
              </div>
            </div>

            {/* CENTER divider */}
            <div className="au-fusion-center">
              <div className="au-fc-line top" />
              <div className="au-fc-plus">
                <span>+</span>
              </div>
              <div className="au-fc-line bottom" />
              <div className="au-fc-equals">= Results</div>
            </div>

            {/* RIGHT — Data Intelligence */}
            <div className="au-fusion-panel right-panel">
              <div className="au-fp-header">
                <div className="au-fp-icon-wrap tech" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 14, background: 'rgba(248,162,19,0.15)', color: '#F8A213', boxShadow: '0 4px 16px rgba(248,162,19,0.25)', flexShrink: 0 }}>
                  <Monitor size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="au-fp-label gold">PILLAR 02</div>
                  <h3 className="au-fp-title">Data Intelligence</h3>
                </div>
              </div>
              <p className="au-fp-desc">
                ChessKid analytics, adaptive puzzle engines, and performance tracking
                bring precision, objectivity and measurable progress.
              </p>
              <ul className="au-fp-list">
                {['50,000+ adaptive puzzles', '250 structured lessons', 'Real-time performance reports', 'Gamification & XP system', 'Custom student dashboards'].map(f => (
                  <li key={f}><span className="au-fp-check gold">✦</span>{f}</li>
                ))}
              </ul>
              <div className="au-fp-tags">
                <span>ChessKid</span><span>Analytics</span><span>Adaptive AI</span>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Quote — CSS-positioned decorative marks, no misaligned spans */}
        <Reveal delay={150}>
          <div className="au-fusion-quote-block">
            <div className="au-fq-inner">
              <p className="au-fq-text">
                We are using 21st-century technology to master a 6th-century game.
              </p>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function AboutUs() {
  return (
    <main className="au-page">
      <AboutHero />
      <OriginStory />
      <Philosophy />
      <Founders />
      <AntiSyllabus />
      <GlobalFootprint />
      <AboutCTA />
      <SoulOfGame />
      <TechEcosystem />
      <FusionSection />
    </main>
  )
}
