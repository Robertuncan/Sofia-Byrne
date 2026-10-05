import React from 'react';

/**
 * Footer:
 * Calm, minimal footer with wordmark, genuine contact details, and copyright.
 */
export default function Footer({ business }) {
  return (
    <footer
      style={{
        backgroundColor: '#110E1B',
        color: '#A1A1AA',
        paddingTop: '64px',
        paddingBottom: '48px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Brand & Purpose */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              {business.name}
            </span>
            <p style={{ color: '#D4D4D8', fontSize: '0.95rem', marginBottom: '8px' }}>
              {business.tagline}
            </p>
            <p style={{ color: '#71717A', fontSize: '0.88rem' }}>
              {business.footer.serviceArea}
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {business.navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    color: '#A1A1AA',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <div>
                <span style={{ display: 'block', color: '#71717A', fontSize: '0.8rem' }}>Location</span>
                <span style={{ color: '#D4D4D8' }}>{business.fullAddress}</span>
              </div>
              <div>
                <span style={{ display: 'block', color: '#71717A', fontSize: '0.8rem' }}>WhatsApp & Mobile</span>
                <a
                  href={business.links.whatsapp}
                  style={{ color: '#DDD6FE', textDecoration: 'none', fontWeight: 500 }}
                >
                  {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.85rem',
            color: '#71717A'
          }}
        >
          <div>
            &copy; {business.footer.year} {business.name}. {business.type}.
          </div>
          <div>
            Eye, Peterborough, PE6 7PY
          </div>
        </div>
      </div>
    </footer>
  );
}
