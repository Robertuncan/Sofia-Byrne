import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';

/**
 * FAQ Section:
 * - 4 practical questions addressing duct inspection frequency and signs
 * - Clean, accessible accordion with smooth toggle
 */
export default function Faq({ business }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container" style={{ maxWidth: '860px' }}>
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.h2}
          align="center"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {business.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-resting)' : 'none',
                  transition: 'box-shadow var(--transition-fast), border-color var(--transition-fast)'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-ink)'
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-primary-light)' : 'var(--color-surface-subtle)',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-muted)',
                      flexShrink: 0,
                      transition: 'transform var(--transition-fast)'
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform var(--transition-fast)'
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px 24px',
                      color: 'var(--color-muted)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(24, 24, 27, 0.04)'
                    }}
                  >
                    <p style={{ margin: 0, paddingTop: '12px' }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
