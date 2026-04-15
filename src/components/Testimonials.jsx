import './Testimonials.css'
import { useEffect } from 'react'

export default function Testimonials() {
  useEffect(() => {
    const scriptSrc = 'https://elfsightcdn.com/platform.js'
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="text-center testimonials-header">
          <h2 className="testimonials-heading">What Our Customers Say</h2>
          <div className="rating-badge">
            <span className="stars">★★★★★</span>
            <span className="rating-text">4.8/5 Google Rating</span>
          </div>
        </div>

        <div className="testimonials-widget-wrap">
          <div
            className="elfsight-app-14059645-a1ce-4815-b15e-0da4b3b5b8cb"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}
