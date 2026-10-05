import React, { useState } from 'react';
import Button from './ui/Button';

/**
 * Hero Section:
 * - High-impact atmosphere with tonal scrim for maximum readability
 * - Bold H1, concise benefit-led copy
 * - Primary CTA (WhatsApp) + Secondary CTA (View Services)
 * - Quiet trust row with genuine local business signals
 */
export default function Hero({ business }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--navbar-height) + 48px)',
        paddingBottom: '80px',
        backgroundColor: '#1E1B2E',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      {/* Background Image Container with Tonal Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <img
          src={business.hero.bgImage}
          alt={business.name}
          onLoad={() => setImgLoaded(true)}
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imgLoaded ? 0.38 : 0.25,
            transition: 'opacity 500ms ease',
            filter: 'brightness(0.85) contrast(1.1)'
          }}
        />
        {/* Subtle tonal gradient scrim: deep dark purple-tinted charcoal */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(20, 14, 35, 0.92) 0%, rgba(26, 20, 48, 0.82) 50%, rgba(15, 12, 28, 0.94) 100%)'
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 'var(--container-max-width)'
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#DDD6FE',
              marginBottom: '24px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#A78BFA'
              }}
            />
            {business.hero.eyebrow}
          </div>

          {/* H1 Headline */}
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}
          >
            {business.hero.h1}
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#E4E4E7',
              maxWidth: '620px',
              marginBottom: '36px'
            }}
          >
            {business.hero.subheading}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '48px'
            }}
          >
            <Button
              href={business.links.whatsapp}
              variant="white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              {business.cta.primary}
            </Button>

            <Button
              href={business.links.servicesAnchor}
              variant="outline-white"
            >
              {business.cta.secondary}
            </Button>

            <Button
              href={business.links.phone}
              variant="outline-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {business.phoneDisplay}
            </Button>
          </div>

          {/* Quiet Trust Markers */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 24px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.88rem',
              color: '#A1A1AA'
            }}
          >
            {business.hero.trustMarkers.map((marker, index) => (
              <span
                key={index}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {marker}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
