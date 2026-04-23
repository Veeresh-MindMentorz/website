import { useRef, useState, useEffect } from 'react'
import './Gallery.css'
import { Images, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    src: '/event1.png',
    caption: 'Tournament Day',
    tag: 'Event',
  },
  {
    src: '/event2.png',
    caption: 'Award Ceremony',
    tag: 'Achievement',
  },
  {
    src: '/event3.png',
    caption: 'Chess Camp',
    tag: 'Event',
  },
  {
    src: '/student-yashas.jpg',
    caption: 'Yashas Ram Tetali',
    tag: 'Student',
  },
  {
    src: '/student-vrishank.jpg',
    caption: 'Vrishank Reddy',
    tag: 'Student',
  },
  {
    src: '/student-sathvik.jpg',
    caption: 'Sathvik Sharath',
    tag: 'Student',
  },
  {
    src: '/student-riddhi.jpg',
    caption: 'Riddhi Gupta',
    tag: 'Student',
  },
  {
    src: '/student-prishita.jpg',
    caption: 'Prishita Choudhary',
    tag: 'Student',
  },
  {
    src: '/student-manjoyee.jpg',
    caption: 'Manjoyee Roy',
    tag: 'Student',
  },
  {
    src: '/student-ariv.jpg',
    caption: 'FM Ariv Debmisra',
    tag: 'Student',
  },
  {
    src: '/student-anay.jpg',
    caption: 'Anay Banka',
    tag: 'Student',
  },
  {
    src: '/about-hero.png',
    caption: 'MindMentorz Academy',
    tag: 'Academy',
  },
]

export default function Gallery() {
  const trackRef = useRef(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)
  const [lightbox, setLightbox] = useState(null) // index of open image

  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    updateArrows()
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  const openLightbox = (i) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prevLight = () => setLightbox((p) => (p - 1 + galleryItems.length) % galleryItems.length)
  const nextLight = () => setLightbox((p) => (p + 1) % galleryItems.length)

  // keyboard nav
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
        {/* Header */}
        <div className="text-center gallery-header">
          <div className="section-tag">
            <Images size={13} strokeWidth={2} style={{ color: '#F8A213' }} />
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

        {/* Carousel wrapper */}
        <div className="gallery-carousel-wrap">
          {/* Left arrow */}
          <button
            className={`gallery-arrow gallery-arrow--left ${canLeft ? '' : 'gallery-arrow--hidden'}`}
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          {/* Scroll track */}
          <div className="gallery-track" ref={trackRef}>
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="gallery-card"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
                aria-label={`Open ${item.caption}`}
              >
                <div className="gallery-img-wrap">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-zoom-icon">⤢</span>
                  </div>
                </div>
                <div className="gallery-meta">
                  <span className="gallery-tag">{item.tag}</span>
                  <span className="gallery-caption">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className={`gallery-arrow gallery-arrow--right ${canRight ? '' : 'gallery-arrow--hidden'}`}
            onClick={() => scroll(1)}
            aria-label="Scroll right"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Scroll hint dots */}
        <div className="gallery-scroll-hint">
          <span className="gallery-hint-text">Swipe or click arrows to explore</span>
        </div>
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
              <span className="gallery-tag">{galleryItems[lightbox].tag}</span>
              <span>{galleryItems[lightbox].caption}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
