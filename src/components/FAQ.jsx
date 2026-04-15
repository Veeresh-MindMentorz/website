import './FAQ.css'
import { useState } from 'react'

const faqs = [
  {
    q: 'Does my child need prior experience?',
    a: 'No. We train students from absolute beginner to advanced tournament level. Our Level 1 program is specifically designed for children with zero prior chess knowledge.',
  },
  {
    q: 'Do you support FIDE tournaments?',
    a: 'Yes. We actively guide students into competitive and FIDE-rated tournaments. Our coaches prepare students for real competition through regular internal and external tournaments.',
  },
  {
    q: 'How is progress tracked?',
    a: 'Through structured assessments and ChessKid performance reports after every 16 sessions. Parents receive detailed reports showing improvement in rating, puzzles solved, and tactical skill.',
  },
  {
    q: 'What makes Mind Mentorz different?',
    a: 'Our structured 6-level curriculum, ChessKid integration, FIDE-rated coaching team, tournament focus, and measurable results set us apart from conventional chess classes.',
  },
  {
    q: 'Are classes available online?',
    a: 'Yes! We offer both online and offline classes. Our online sessions use professional video platforms combined with the ChessKid digital learning ecosystem.',
  },
  {
    q: 'How long does each level take?',
    a: 'Each level has 24–60 structured sessions depending on the level. Students progress at their own pace, and advancement is based on skill assessment, not just time.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">❓ Common Questions</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider divider-center" />
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item glass-card ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
                <h4>{f.q}</h4>
              </div>
              {open === i && (
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
