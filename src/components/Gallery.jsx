import { useState, useEffect } from 'react'
import './Gallery.css'
import { Images, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  { src: '/g1.jpeg',  caption: 'Tournament Day',           tag: 'Event' },
  { src: '/g2.jpeg',  caption: 'Award Ceremony',           tag: 'Achievement' },
  { src: '/g3.jpeg',  caption: 'Chess Camp',               tag: 'Event' },
  { src: '/g4.jpg',   caption: 'Champion Celebration',     tag: 'Achievement' },
  { src: '/g5.jpeg',  caption: 'Training Session',         tag: 'Academy' },
  { src: '/g6.jpg',   caption: 'Young Grandmaster',        tag: 'Student' },
  { src: '/g7.jpeg',  caption: 'Focused Minds',            tag: 'Academy' },
  { src: '/g8.jpeg',  caption: 'Prize Distribution',       tag: 'Achievement' },
  { src: '/g9.jpg',   caption: 'Batch Graduation',         tag: 'Event' },
  { src: '/g10.jpeg', caption: 'Live Tournament',          tag: 'Event' },
  { src: '/g11.webp', caption: 'Chess Olympiad Prep',      tag: 'Academy' },
  { src: '/g12.webp', caption: 'MindMentorz Community',   tag: 'Academy' },
]

// Split into two rows
const ROW1 = galleryItems.slice(0, Math.ceil(galleryItems.length / 2))
const ROW2 = galleryItems.slice(Math.ceil(galleryItems.length / 2))

const TAG_COLORS = {
  Event:       { bg: 'rgba(100,43,143,0.12)', color: '#642b8f' },
  Achievement: { bg: 'rgba(248,162,19,0.14)', color: '#b87409' },
  Student:     { bg: 'rgba(14,165,233,0.12)', color: '#0369a1' },
  Academy:     { bg: 'rgba(16,185,129,0.12)', color: '#047857' },
}

function GalleryCard({ item, onClick }) {
  const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS.Event
  return (
    <div
      className="gal-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Open ${item.caption}`}
    >
      <div className="gal-img-wrap">
        <img src={item.src} alt={item.caption} className="gal-img" loading="lazy" />
        <div className="gal-overlay">
          <span className="gal-zoom">⤢</span>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, direction = 'left', onCardClick, offset = 0 }) {
  const doubled = [...items, ...items]
  return (
    <div className={`gal-marquee-track gal-marquee-${direction}`}>
      <div className="gal-marquee-inner">
        {doubled.map((item, i) => (
          <GalleryCard
            key={i}
            item={item}
            onClick={() => onCardClick(offset + (i % items.length))}
          />
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [paused, setPaused] = useState(false)

  const openLightbox = (i) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prevLight = () => setLightbox((p) => (p - 1 + galleryItems.length) % galleryItems.length)
  const nextLight = () => setLightbox((p) => (p + 1) % galleryItems.length)

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prevLight()
      if (e.key === 'ArrowRight') nextLight()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="text-center gallery-header">
          <div className="section-tag">
            <Images size={13} strokeWidth={2} style={{ color: '#F8A213', display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
            Our Gallery
          </div>
          <h2 className="section-title">
            Life at <span className="gallery-gold">MindMentorz</span>
          </h2>
          <div className="divider divider-center" />
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Real moments from tournaments, training sessions, and champion celebrations.
          </p>
        </div>
      </div>

      {/* Dual-row marquee */}
      <div
        className={`gal-marquee-container${paused ? ' paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <MarqueeRow
          items={ROW1}
          direction="left"
          onCardClick={openLightbox}
          offset={0}
        />
        <MarqueeRow
          items={ROW2}
          direction="right"
          onCardClick={openLightbox}
          offset={ROW1.length}
        />
      </div>

      <div className="gal-hint">
        <span>Hover to pause · Click any photo to enlarge</span>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            <button className="lightbox-nav lightbox-nav--prev" onClick={prevLight} aria-label="Previous">
              <ChevronLeft size={28} />
            </button>
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].caption}
              className="lightbox-img"
            />
            <button className="lightbox-nav lightbox-nav--next" onClick={nextLight} aria-label="Next">
              <ChevronRight size={28} />
            </button>
            <div className="lightbox-caption">
              <span className="gal-tag" style={{ background: TAG_COLORS[galleryItems[lightbox].tag]?.bg, color: TAG_COLORS[galleryItems[lightbox].tag]?.color }}>
                {galleryItems[lightbox].tag}
              </span>
              <span>{galleryItems[lightbox].caption}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
