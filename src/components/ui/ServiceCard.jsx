import React, { useState } from 'react';

/**
 * ServiceCard component:
 * - Fixed aspect-ratio image container with smooth hover zoom
 * - Graceful fallback if image fails
 * - Clean title and concise description
 * - Subdued border, resting shadow, and gentle hover lift
 */
export default function ServiceCard({
  service,
  onSelectService,
  whatsappBaseUrl
}) {
  const [imgError, setImgError] = useState(false);
  const inquiryLink = `${whatsappBaseUrl}?text=${encodeURIComponent(`Hello Sofia Byrne, I would like to inquire about ${service.title}.`)}`;

  return (
    <article
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-resting)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)'
      }}
      className="service-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        e.currentTarget.style.borderColor = 'rgba(91, 33, 182, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-resting)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      {/* Image Container with fixed aspect ratio */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: '#F3F4F6',
          position: 'relative'
        }}
      >
        {!imgError ? (
          <img
            src={service.image}
            alt={service.title}
            className="img-cover"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            style={{
              transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1.0)';
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor: '#EDE9FE',
              color: '#5B21B6',
              padding: '16px',
              textAlign: 'center'
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
            </svg>
            <span style={{ fontSize: '0.85rem', marginTop: '8px', fontWeight: 600 }}>{service.title}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '10px',
              color: 'var(--color-ink)'
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.55,
              color: 'var(--color-muted)',
              marginBottom: '18px'
            }}
          >
            {service.description}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid var(--color-border)',
            gap: '12px'
          }}
        >
          <a
            href={inquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Inquire on WhatsApp
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {onSelectService && (
            <button
              type="button"
              onClick={() => onSelectService(service.title)}
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-muted)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: '4px 0'
              }}
            >
              Request in form
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
