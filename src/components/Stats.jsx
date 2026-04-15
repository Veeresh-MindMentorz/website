import './Stats.css'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { icon: '📚', value: 10000, suffix: '+', label: 'Classes Delivered' },
  { icon: '🎓', value: 2500, suffix: '+', label: 'Students Trained' },
  { icon: '🏆', value: 200, suffix: '+', label: 'Tournaments Conducted' },
  { icon: '🌍', value: 10, suffix: '+', label: 'Countries Reached' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = null
    const duration = 2200

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [active, target])

  const display = count.toLocaleString('en-US')
  return <>{display}{suffix}</>
}

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" id="impact" ref={ref}>
      <div className="container">
        <div className="stats-head text-center">
          <div className="section-tag stats-tag">📊 Our Impact</div>
          <h2 className="stats-title">Measured Progress. <span className="stats-gold">Real Outcomes.</span></h2>
          <p className="stats-subtitle">Families trust Mind Mentorz because results are visible, structured, and consistent.</p>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card glass-card" key={s.label} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="stat-ring">
                <div className="stat-icon">{s.icon}</div>
              </div>
              <div className="stat-value">
                <CountUp target={s.value} suffix={s.suffix} active={visible} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
