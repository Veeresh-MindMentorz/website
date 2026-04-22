import './Blog.css'
import { Link } from 'react-router-dom'
import {
  Crown, Brain, BarChart2, Bot, Handshake, MapPin,
  AlertTriangle, Trophy, GraduationCap, School, Video,
  Rocket, Zap, BookOpen, Clock, ArrowRight, Newspaper,
} from 'lucide-react'

/* Maps emoji icon string → { Icon, color } */
const ICON_MAP = {
  '\u265f\ufe0f': { Icon: Crown,          color: '#642b8f' },
  '\u265f':       { Icon: Crown,          color: '#642b8f' },
  '\ud83e\udde0': { Icon: Brain,          color: '#7C3AED' },
  '\ud83d\udcca': { Icon: BarChart2,      color: '#3B5BDB' },
  '\ud83e\udd16': { Icon: Bot,            color: '#0C8599' },
  '\ud83e\udd1d': { Icon: Handshake,      color: '#009B77' },
  '\ud83d\udccd': { Icon: MapPin,         color: '#E03131' },
  '\u26a0\ufe0f': { Icon: AlertTriangle,  color: '#F8A213' },
  '\ud83c\udfc6': { Icon: Trophy,         color: '#F8A213' },
  '\ud83c\udf93': { Icon: GraduationCap,  color: '#642b8f' },
  '\ud83c\udfeb': { Icon: School,         color: '#0C8599' },
  '\ud83c\udf9b': { Icon: Video,          color: '#D6336C' },
  '\ud83d\ude80': { Icon: Rocket,         color: '#F8A213' },
  '\u26a1':       { Icon: Zap,            color: '#F8A213' },
  '\ud83d\udcda': { Icon: BookOpen,       color: '#3B5BDB' },
}

export function getBlogIcon(emoji) {
  return ICON_MAP[emoji] || { Icon: Newspaper, color: '#642b8f' }
}

import { blogs } from '../data/blogData.js';

export default function Blog() {
  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Brain size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            Chess Blog
          </div>
          <h2 className="section-title">Learn Chess. Think Better.<br />Win More.</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Explore expert insights on chess improvement, tournament success, and building a champion mindset.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map(b => (
            <div key={b.id} className="blog-card" style={{ '--blog-color': b.color }}>
              <div className="blog-card-top">
                <div className="blog-icon" style={{ background: b.color + '15', color: b.color, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {(() => { const { Icon } = getBlogIcon(b.icon); return <Icon size={22} strokeWidth={1.75} />; })()}
                </div>
                <div className="blog-tag" style={{ color: b.color, background: b.color + '12', borderColor: b.color + '30' }}>{b.tag}</div>
              </div>
              <h3 className="blog-title">{b.title}</h3>
              <p className="blog-excerpt">{b.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-read-time">
                  <Clock size={13} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                  {b.readTime}
                </span>
                <Link to={`/blogs/${b.slug}`} className="blog-read-btn" style={{ color: b.color, borderColor: b.color + '40', display: 'inline-block', textDecoration: 'none' }}>
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
