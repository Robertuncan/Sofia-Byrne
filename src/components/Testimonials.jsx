import React from 'react';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials Section:
 * Renders ONLY if testimonials exist in config.
 * When null/empty, returns null cleanly with zero empty placeholders.
 */
export default function Testimonials({ business }) {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Reviews"
          title="What local clients say"
          align="center"
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {business.testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '32px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)'
              }}
            >
              <blockquote style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '16px' }}>
                "{item.quote}"
              </blockquote>
              <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{item.author}</div>
              {item.location && <div style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{item.location}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
