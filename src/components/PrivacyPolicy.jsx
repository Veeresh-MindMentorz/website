import './PrivacyPolicy.css'
import PolicyTabs from './PolicyTabs'

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="policy-meta">MindMentorz Chess Academy</p>
          <PolicyTabs />
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>Privacy Policy</h2>
            <p className="section-meta">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            <p className="section-meta">Effective Date: 01-May-2022</p>

            <h3>About Us</h3>
            <p>
              This Privacy Policy describes the policies of Franchise MindMentorz Pvt Ltd, MindMentorz, No. 54 First Floor, Sector 2,
              Hennur - Bagalur Road, Kothanur, Bengaluru, Karnataka 560077, India, email: <a href="mailto:info@mindmentorz.com">info@mindmentorz.com</a>,
              phone: <a href="tel:+918618568046">+91 86185 68046</a> on the collection, use and disclosure of your information that we collect
              when you use our website.
            </p>

            <h3>Information We Collect</h3>
            <p>We will collect and process the following personal information about you:</p>
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li>Mobile</li>
              <li>Date of Birth</li>
              <li>Payment Info</li>
              <li>Gender and Kids Subject of Enrollment</li>
              <li>Website usage information (like browser and device type)</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>We will use the information that we collect about you for the following purposes:</p>
            <ul>
              <li>Provide chess coaching services</li>
              <li>Marketing and promotional activities</li>
              <li>Testimonials</li>
              <li>Customer feedback collection</li>
              <li>Enforce terms and conditions</li>
              <li>Processing payment</li>
              <li>Customer support</li>
              <li>Administration purposes</li>
              <li>Targeted advertising</li>
              <li>Manage customer orders</li>
              <li>Site protection</li>
              <li>Send important communications via SMS, email, WhatsApp, and phone calls related to our services and support</li>
            </ul>

            <h3>How We Share Your Information</h3>
            <p>
              We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances such as:
            </p>
            <ul>
              <li>Ad service providers</li>
              <li>Marketing agencies</li>
              <li>Legal entities (when required by law)</li>
              <li>Analytics providers</li>
              <li>Data collection and processing partners</li>
            </ul>

            <h3>Security</h3>
            <p>
              The security of your information is important to us and we will use reasonable security measures to prevent loss,
              misuse or unauthorized alteration of your information. All payments are handled through secure third-party payment gateways.
              We do not store your card or banking details.
            </p>

            <h3>Cookies</h3>
            <p>
              Our website may use cookies to improve user experience and website performance. Cookies are small text files stored on your device.
              You can disable cookies in your browser settings.
            </p>

            <h3>Children's Privacy</h3>
            <p>
              Information related to children is collected only for coaching purposes and with parental or guardian consent.
            </p>

            <h3>Your Rights</h3>
            <p>
              Depending on applicable law, you may have rights to access, rectify, or erase your personal data; restrict processing;
              object to processing; request data portability; withdraw consent; or lodge complaints. To exercise these rights,
              write to us at <a href="mailto:info@mindmentorz.com">info@mindmentorz.com</a>.
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this page.
              Your continued use of the service after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className="policy-section">
            <h2>Data Protection and Grievance</h2>
            <p>If you have any queries or concerns about the processing of your information, you may contact:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info@mindmentorz.com">info@mindmentorz.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+918618568046">+91 86185 68046</a></li>
              <li><strong>Address:</strong> No. 54 First Floor, Sector 2, Hennur - Bagalur Road, Kothanur, Bengaluru, Karnataka 560077</li>
            </ul>
          </section>

          <section className="policy-section note-section">
            <p><em>Privacy Policy generated with compliance to data protection standards.</em></p>
          </section>
        </div>
      </div>
    </div>
  )
}
