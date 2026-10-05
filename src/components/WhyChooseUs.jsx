import React from 'react';
import SectionHeading from './ui/SectionHeading';

/**
 * Why Choose Us Section:
 * - 4 clean numbered editorial trust blocks
 * - Strictly drawn from real location, full-spectrum services, and direct booking
 * - Zero fabricated statistics or fake metrics
 */
export default function WhyChooseUs({ business }) {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.h2}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {business.whyChooseUs.points.map((point) => (
            <div
              key={point.number}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 24px',
                boxShadow: 'var(--shadow-resting)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.borderColor = 'rgba(91, 33, 182, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-resting)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Editorial Number */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  marginBottom: '16px',
                  lineHeight: 1
                }}
              >
                {point.number}
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: 'var(--color-ink)'
                }}
              >
                {point.title}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'var(--color-muted)',
                  margin: 0
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
