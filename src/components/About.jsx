import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

/**
 * About Section:
 * - Refined 2-column layout with high-quality photo and authentic local narrative
 * - Concrete details regarding Eye, Peterborough and ductwork maintenance
 */
export default function About({ business }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 6vw, 64px)',
            alignItems: 'center'
          }}
        >
          {/* Column 1: Image container */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-resting)',
              border: '1px solid var(--color-border)',
              aspectRatio: '4 / 3',
              backgroundColor: '#EDE9FE'
            }}
          >
            {!imgError ? (
              <img
                src={business.about.image}
                alt={business.about.imageCaption}
                className="img-cover"
                onError={() => setImgError(true)}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F5F3FF',
                  color: 'var(--color-primary)',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <div>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 12px' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                  <p style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{business.about.imageCaption}</p>
                </div>
              </div>
            )}

            {/* Subtle caption pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                backgroundColor: 'rgba(24, 24, 27, 0.85)',
                backdropFilter: 'blur(6px)',
                padding: '10px 16px',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{business.about.imageCaption}</span>
              <span style={{ color: '#DDD6FE' }}>PE6 7PY</span>
            </div>
          </div>

          {/* Column 2: Text content */}
          <div>
            <SectionHeading
              eyebrow={business.about.eyebrow}
              title={business.about.h2}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              {business.about.paragraphs.map((para, i) => (
                <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <Button href={business.links.whatsapp} variant="primary">
                {business.cta.primary}
              </Button>
              <Button href={business.links.directions} variant="secondary">
                {business.cta.getDirections}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
