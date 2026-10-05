import React from 'react';

/**
 * Standardized Section Heading with eyebrow, H2 headline, and optional supporting description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: isCentered ? 'center' : 'left',
        marginBottom: 'clamp(32px, 5vw, 56px)',
        maxWidth: isCentered ? '760px' : '680px',
        marginLeft: isCentered ? 'auto' : '0',
        marginRight: isCentered ? 'auto' : '0'
      }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 style={{ marginBottom: description ? '16px' : '0' }}>{title}</h2>
      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            margin: isCentered ? '0 auto' : '0',
            color: 'var(--color-muted)'
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
