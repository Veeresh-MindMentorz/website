import './Locations.css'
import { MapPin, Phone } from 'lucide-react'

function DetailIcon({ icon: Icon, bg, color }) {
  return (
    <div className="detail-icon" style={{ background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={18} strokeWidth={2} />
    </div>
  )
}

export default function Locations() {
  return (
    <div className="locations-page">
      <div className="locations-hero text-center">
        <div className="section-tag">Visit Us</div>
        <h1 className="section-title" style={{ color: '#FFFFFF' }}>Our Academy <span className="locations-gold">Locations.</span></h1>
        <p className="locations-subtitle">
          Visit us in person at one of our academy centers. Find the one nearest you!
        </p>
      </div>

      <div className="container">
        <div className="locations-grid">
          {/* Kothanur Center */}
          <div className="location-card kothanur">
            <div className="location-card-header">
              <h2 className="location-title">Kothanur Center</h2>
              <span className="location-badge main">MAIN BRANCH</span>
            </div>
            
            <div className="location-details">
              <div className="detail-row">
                <DetailIcon icon={MapPin} bg="#EDE9F8" color="#642b8f" />
                <div>
                  <strong>Address:</strong>
                  <p>1st Floor, No. 54, Sect 2, Hennur Bagalur Main Rd, Kothanur, Byrathi Bande (Krishnanagara), Bengaluru, Karnataka 560077</p>
                </div>
              </div>

              <div className="detail-row">
                <DetailIcon icon={Phone} bg="#EDE9F8" color="#642b8f" />
                <div>
                  <strong>Phone:</strong>
                  <p>+91 86185 68046</p>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com/?q=MindMentorz+Kothanur" target="_blank" rel="noopener noreferrer" className="btn-direction kothanur-btn">
              Get Directions ↗
            </a>
          </div>

          {/* Vidyaranyapura Center */}
          <div className="location-card vidya">
            <div className="location-card-header">
              <h2 className="location-title">Vidyaranyapura Center</h2>
              <span className="location-badge branch">BRANCH</span>
            </div>

            <div className="location-details">
              <div className="detail-row">
                <DetailIcon icon={MapPin} bg="#FFF5EB" color="#F8A213" />
                <div>
                  <strong>Address:</strong>
                  <p>Thindlu Main Road Virupakshapura, opposite Vidya Spoorthi School, Kodigehalli, Vidyaranyapura, Bengaluru, Karnataka 560097</p>
                </div>
              </div>

              <div className="detail-row">
                <DetailIcon icon={Phone} bg="#FFF5EB" color="#F8A213" />
                <div>
                  <strong>Phone:</strong>
                  <p>+91 91129 11236</p>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com/?q=MindMentorz+Vidyaranyapura" target="_blank" rel="noopener noreferrer" className="btn-direction vidya-btn">
              Get Directions ↗
            </a>
          </div>

          {/* Wakad Pune Center */}
          <div className="location-card pune">
            <div className="location-card-header">
              <h2 className="location-title">Wakad Pune</h2>
              <span className="location-badge pune-badge">BRANCH</span>
            </div>

            <div className="location-details">
              <div className="detail-row">
                <DetailIcon icon={MapPin} bg="#E6F4F1" color="#0D9488" />
                <div>
                  <strong>Address:</strong>
                  <p>Office No 147, 1st Floor, Vision one mall, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411033</p>
                </div>
              </div>

              <div className="detail-row">
                <DetailIcon icon={Phone} bg="#E6F4F1" color="#0D9488" />
                <div>
                  <strong>Phone:</strong>
                  <p>+91 8530086204</p>
                </div>
              </div>
            </div>

            <a href="https://maps.app.goo.gl/db2Zp8sX7a9yJiGA8" target="_blank" rel="noopener noreferrer" className="btn-direction pune-btn">
              Get Directions ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
