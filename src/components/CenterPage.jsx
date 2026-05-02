import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './CenterPage.css'
import { centers } from '../data/centers'
import newLogo from '../newLogo.png'
import {
  MapPin, Phone, Clock, Users, Trophy, Star, ArrowLeft,
  ExternalLink, MessageCircle, Calendar, ChevronRight,
  Award, Zap, Tv, Wifi, Wind, Timer, BookOpen, Video,
  Users2, ChevronLeft, CheckCircle2
} from 'lucide-react'

/* ── Minimal Center Navbar ── */
function CenterNavbar({ center }) {
  return (
    <nav className="cp-navbar">
      <div className="cp-navbar-inner">
        <Link to="/" className="cp-navbar-logo">
          <img src={newLogo} alt="MindMentorz" className="cp-logo-img" />
          <div className="cp-logo-text">
            <span className="cp-logo-name">MindMentorz</span>
            <span className="cp-logo-sub">Chess Academy</span>
          </div>
        </Link>

        <div className="cp-navbar-center-tag">
          <MapPin size={13} />
          {center.shortName} Center
        </div>

        <div className="cp-navbar-actions">
          <Link to="/locations" className="cp-navbar-back">
            <ArrowLeft size={14} /> All Centers
          </Link>
          <a
            href="https://skuare.mindmentorz.com/student-login"
            target="_blank" rel="noopener noreferrer"
            className="cp-navbar-kids-login"
          >
            Kids Login
          </a>
          <a
            href="https://skuare.mindmentorz.com/parent-login"
            target="_blank" rel="noopener noreferrer"
            className="cp-navbar-parent-login"
          >
            Parent Login
          </a>
          <a
            href="https://skuare.mindmentorz.com/public/register"
            target="_blank" rel="noopener noreferrer"
            className="cp-navbar-cta"
          >
            <Zap size={14} /> Book Free Trial
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ── Star rating ── */
function StarRating({ count = 5 }) {
  return (
    <span className="cp-stars">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#F8A213" color="#F8A213" />
      ))}
    </span>
  )
}

/* ── Facilities data ── */
const FACILITIES = [
  { Icon: Tv,        label: 'Smart Interactive TV',      desc: 'HD smart boards for live analysis and interactive lessons.' },
  { Icon: BookOpen,  label: 'FIDE-Standard Classrooms',  desc: 'Classrooms set up to FIDE tournament standards.' },
  { Icon: Wind,      label: 'Air-Conditioned Halls',     desc: 'Comfortable, distraction-free AC learning environment.' },
  { Icon: Timer,     label: 'Tournament Clocks & Sets',  desc: 'Professional DGT clocks and tournament-grade chess sets.' },
  { Icon: Video,     label: 'Game Recording & Review',   desc: 'Sessions recorded for post-class analysis and improvement.' },
  { Icon: Wifi,      label: 'High-Speed Wi-Fi',          desc: 'Seamless connectivity for online platforms & Chess.com.' },
  { Icon: Users2,    label: 'Parent Waiting Lounge',     desc: 'Comfortable waiting area with progress update screens.' },
  { Icon: Trophy,    label: 'Trophy Display Corner',     desc: 'Wall of champions celebrating student achievements.' },
]

/* ── Gallery horizontal scroll ── */
function GalleryScroll({ images, centerName }) {
  const ref = useRef(null)
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <div className="cp-gallery-scroll-wrap">
      <button className="cp-gal-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
      <button className="cp-gal-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
      <div className="cp-gallery-scroll" ref={ref}>
        {images.map((src, i) => (
          <div key={i} className="cp-gallery-slide">
            <img src={src} alt={`${centerName} photo ${i + 1}`} loading="lazy" />
            <div className="cp-gallery-slide-overlay">
              <ExternalLink size={20} color="#fff" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CenterPage() {
  const { slug } = useParams()
  const center = centers.find(c => c.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!center) {
    return (
      <div className="cp-notfound">
        <h2>Center not found</h2>
        <Link to="/locations" className="btn-primary">← Back to Locations</Link>
      </div>
    )
  }

  return (
    <div className="cp-page">

      {/* ── MINIMAL NAVBAR ── */}
      <CenterNavbar center={center} />

      {/* ── HERO ── */}
      <section className="cp-hero">
        <div className="cp-hero-img-wrap">
          <img src={center.image} alt={center.name} className="cp-hero-img" />
          <div className="cp-hero-overlay" />
        </div>
        <div className="cp-hero-content container">
          <div className="cp-hero-badge">{center.badge}</div>
          <h1 className="cp-hero-title">{center.name}</h1>
          <p className="cp-hero-city">
            <MapPin size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            {center.city} · Est. {center.established}
          </p>
          <p className="cp-hero-tagline">"{center.tagline}"</p>
          <div className="cp-hero-actions">
            <a
              href="https://skuare.mindmentorz.com/public/register"
              target="_blank" rel="noopener noreferrer"
              className="cp-cta-primary"
            >
              <Zap size={17} /> Book Free Trial
            </a>
            <a
              href={center.directionsUrl}
              target="_blank" rel="noopener noreferrer"
              className="cp-cta-outline"
            >
              <MapPin size={16} /> Get Directions
            </a>
            <a
              href={`https://wa.me/${center.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(center.name)}%20chess%20program`}
              target="_blank" rel="noopener noreferrer"
              className="cp-cta-whatsapp"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Floating stat pills - exclude Avg Rating Gain */}
        <div className="cp-hero-stats">
          {center.stats.filter(s => s.label !== 'Avg Rating Gain').map(s => (
            <div key={s.label} className="cp-stat-pill">
              <span className="cp-stat-val">{s.value}</span>
              <span className="cp-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </section>



      {/* ── ABOUT THIS CENTER ── */}
      <section className="cp-section container">
        <div className="cp-about-grid">
          <div className="cp-about-text">
            <div className="section-tag">About This Center</div>
            <h2 className="cp-section-title">
              Why Choose <span className="cp-gold">{center.shortName}?</span>
            </h2>
            <div className="divider" />
            <p className="cp-about-desc">{center.description}</p>
            <div className="cp-features-grid">
              {center.features.map(f => (
                <div key={f.title} className="cp-feature-card">
                  <span className="cp-feature-icon">{f.icon}</span>
                  <div>
                    <div className="cp-feature-title">{f.title}</div>
                    <div className="cp-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats panel */}
          <div className="cp-stats-panel">
            <div className="cp-stats-panel-title">Center Highlights</div>
            {center.stats.filter(s => s.label !== 'Avg Rating Gain').map(s => (
              <div key={s.label} className="cp-panel-stat">
                <div className="cp-panel-stat-val">{s.value}</div>
                <div className="cp-panel-stat-lbl">{s.label}</div>
              </div>
            ))}
            <div className="cp-panel-divider" />
            <div className="cp-panel-established">
              <Award size={16} style={{ display: 'inline', marginRight: 6 }} />
              Established {center.established}
            </div>
            <a
              href="https://skuare.mindmentorz.com/public/register"
              target="_blank" rel="noopener noreferrer"
              className="cp-panel-cta"
            >
              Enroll Now <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FACILITIES / ASSETS ── */}
      <section className="cp-section cp-facilities-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="section-tag">Our Facilities</div>
            <h2 className="cp-section-title">
              World-Class <span className="cp-gold">Infrastructure</span>
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Every MindMentorz center is equipped with premium tools that make learning chess professional, fun, and effective.
            </p>
          </div>
          <div className="cp-facilities-grid">
            {FACILITIES.map(({ Icon, label, desc }) => (
              <div key={label} className="cp-facility-card">
                <div className="cp-facility-icon-wrap">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="cp-facility-label">{label}</div>
                <div className="cp-facility-desc">{desc}</div>
                <CheckCircle2 size={16} className="cp-facility-check" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY (HORIZONTAL SCROLL) ── */}
      <section className="cp-gallery-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <div className="section-tag cp-tag-light">Gallery</div>
            <h2 className="cp-section-title cp-title-light">
              Life at <span className="cp-gold">{center.shortName}</span>
            </h2>
            <div className="divider divider-center cp-divider-gold" />
            <p className="cp-gallery-hint">← Scroll to explore →</p>
          </div>
        </div>
        <GalleryScroll images={center.gallery} centerName={center.name} />
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="cp-section container">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="section-tag">
            <Star size={13} /> Parent Reviews
          </div>
          <h2 className="cp-section-title">
            What Parents <span className="cp-gold">Say</span>
          </h2>
          <div className="divider divider-center" />
        </div>
        <div className="cp-testimonials-grid">
          {center.testimonials.map((t, i) => (
            <div key={i} className="cp-testimonial-card">
              <StarRating count={t.stars} />
              <p className="cp-testimonial-text">"{t.text}"</p>
              <div className="cp-testimonial-author">
                <div className="cp-testimonial-avatar">{t.name[0]}</div>
                <div>
                  <div className="cp-testimonial-name">{t.name}</div>
                  <div className="cp-testimonial-child">{t.child}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="cp-map-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 32 }}>
            <div className="section-tag">
              <MapPin size={13} /> Find Us
            </div>
            <h2 className="cp-section-title">
              Visit <span className="cp-gold">{center.shortName}</span>
            </h2>
          </div>
          <div className="cp-map-wrap">
            <iframe
              title={`${center.name} Map`}
              src={center.mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="cp-map-address">
            <MapPin size={18} className="cp-map-pin-icon" />
            <span>{center.address}</span>
            <a href={center.directionsUrl} target="_blank" rel="noopener noreferrer"
               className="cp-dir-btn">
              Open in Google Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO STRIP (bottom) ── */}
      <section className="cp-info-strip cp-info-strip-bottom">
        <div className="container">
          <div className="cp-info-strip-heading">
            <MapPin size={18} />
            <span>Center Information</span>
          </div>
          <div className="cp-info-grid">
            <div className="cp-info-item">
              <div className="cp-info-icon"><MapPin size={20} /></div>
              <div>
                <div className="cp-info-label">Address</div>
                <div className="cp-info-val">{center.address}</div>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon"><Phone size={20} /></div>
              <div>
                <div className="cp-info-label">Phone</div>
                <a href={`tel:${center.phone}`} className="cp-info-val cp-info-link">{center.phone}</a>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon"><Clock size={20} /></div>
              <div>
                <div className="cp-info-label">Center Hours</div>
                <div className="cp-info-val">Mon–Fri: 3:30 PM – 8 PM · Sat–Sun: 9 AM – 12 PM</div>
              </div>
            </div>
            <div className="cp-info-item">
              <div className="cp-info-icon"><Users size={20} /></div>
              <div>
                <div className="cp-info-label">Students Enrolled</div>
                <div className="cp-info-val">{center.stats[0].value} trained · Enrollments open</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="cp-bottom-cta">
        <div className="container cp-bottom-cta-inner">
          <div>
            <h2 className="cp-bottom-cta-title">
              Join the <span className="cp-bottom-cta-white">{center.shortName} Family</span>
            </h2>
            <p className="cp-bottom-cta-sub">
              Book your FREE trial class today — no commitment required. Limited seats available!
            </p>
          </div>
          <div className="cp-bottom-cta-actions">
            <a href="https://skuare.mindmentorz.com/public/register"
               target="_blank" rel="noopener noreferrer"
               className="cp-bottom-btn-primary">
              <Trophy size={18} /> Book Free Trial
            </a>
            <a href={`tel:${center.phone}`} className="cp-bottom-btn-outline">
              <Phone size={17} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── MINI FOOTER ── */}
      <footer className="cp-mini-footer">
        <div className="container cp-mini-footer-inner">
          <span>© {new Date().getFullYear()} MindMentorz Chess Academy. All rights reserved.</span>
          <div className="cp-mini-footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
