import './PrivacyPolicy.css'
import PolicyTabs from './PolicyTabs'

export default function RefundPolicy() {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <div className="policy-header">
          <h1>Refund Policy</h1>
          <p className="policy-meta">MindMentorz Chess Academy</p>
          <PolicyTabs />
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>Refund Policy</h2>
            <p className="section-meta">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>

            <h3>No Refund Policy</h3>
            <p>This refund policy applies to all types of chess coaching services subscribed through MindMentorz.</p>
            <p>
              All fees paid to MindMentorz are non-refundable. Once a payment is made and processed,
              it is considered final and no refund will be provided under any circumstances.
            </p>

            <h3>Support for Enrollment Issues</h3>
            <p>
              If you have any issue related to enrollment, duplicate payments, or service access,
              please contact our support team for assistance.
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@mindmentorz.com">info@mindmentorz.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+918618568046">+91 86185 68046</a></li>
            </ul>
          </section>

          <section className="policy-section note-section">
            <p><em>Please review this policy carefully before making payment.</em></p>
          </section>
        </div>
      </div>
    </div>
  )
}
