import './PrivacyPolicy.css'
import PolicyTabs from './PolicyTabs'

export default function TermsOfService() {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <div className="policy-header">
          <h1>Terms of Service</h1>
          <p className="policy-meta">MindMentorz Chess Academy</p>
          <PolicyTabs />
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>Terms of Service</h2>
            <p className="section-meta">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>

            <h3>Acceptance of Terms</h3>
            <p>By accessing or using MindMentorz services, you agree to these terms and all applicable laws.</p>

            <h3>Coaching Services</h3>
            <ul>
              <li>Services include online and offline chess coaching, assessments, and tournament preparation.</li>
              <li>Session schedules may be updated with prior notice.</li>
              <li>Parents or guardians are responsible for providing accurate enrollment information.</li>
            </ul>

            <h3>Payments and Access</h3>
            <ul>
              <li>Fees must be paid as per the selected plan.</li>
              <li>Access to learning platforms may be paused if payments are overdue.</li>
              <li>All payments are governed by our Refund Policy.</li>
            </ul>

            <h3>Code of Conduct</h3>
            <ul>
              <li>Students and parents must maintain respectful behavior in classes and communication channels.</li>
              <li>Misuse of platform access, abusive behavior, or disruption may result in suspension.</li>
            </ul>

            <h3>Intellectual Property</h3>
            <p>
              Course materials, lesson plans, worksheets, and other training content are property of MindMentorz
              and may not be copied or redistributed without permission.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              MindMentorz will make best efforts to deliver quality coaching outcomes; however, improvement depends
              on practice consistency, participation, and learner engagement.
            </p>

            <h3>Contact</h3>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@mindmentorz.com">info@mindmentorz.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+918618568046">+91 86185 68046</a></li>
            </ul>
          </section>

          <section className="policy-section note-section">
            <p><em>By continuing to use our services, you acknowledge and accept these terms.</em></p>
          </section>
        </div>
      </div>
    </div>
  )
}
