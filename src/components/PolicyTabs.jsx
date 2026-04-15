import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-of-service', label: 'Terms of Service' },
  { to: '/refund-policy', label: 'Refund Policy' },
]

export default function PolicyTabs() {
  const { pathname } = useLocation()

  return (
    <div className="policy-tabs">
      {links.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`policy-tab-link ${pathname === item.to ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
