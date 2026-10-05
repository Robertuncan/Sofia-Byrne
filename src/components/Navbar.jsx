import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

/**
 * Navbar adhering strictly to Top Bar Contract:
 * - Zone 1: Single text wordmark in display face
 * - Zone 2: Clean text nav links
 * - Zone 3: Direct WhatsApp action button
 * - Mobile responsive drawer with accessible controls
 */
export default function Navbar({ business }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(24, 24, 27, 0.08)' : 'rgba(24, 24, 27, 0.05)'}`,
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
        transition: 'background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-ink)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onClick={closeMenu}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              display: 'inline-block'
            }}
            aria-hidden="true"
          />
          {business.name}
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          {business.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--color-ink)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="desktop-cta">
            <Button
              href={business.links.whatsapp}
              variant="primary"
            >
              {business.cta.primary}
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--color-ink)'
            }}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
            padding: '24px var(--container-padding)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {business.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-ink)',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.04)'
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Button
              href={business.links.whatsapp}
              variant="primary"
              onClick={closeMenu}
              className="w-full text-center"
            >
              {business.cta.primary}
            </Button>
            <Button
              href={business.links.phone}
              variant="secondary"
              onClick={closeMenu}
              className="w-full text-center"
            >
              Call {business.phoneDisplay}
            </Button>
          </div>
        </div>
      )}

      {/* Responsive media styles embedded */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
