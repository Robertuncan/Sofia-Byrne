import React, { useState, useEffect } from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

/**
 * Contact Section:
 * - Conversion-focused with Direct WhatsApp, Call, and Directions actions
 * - Interactive inquiry form with validation and WhatsApp submission bridge
 * - Clear address and local details
 */
export default function Contact({ business, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: business.servicesSection.services[0]?.title || 'Air Duct Cleaning',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }
    setSubmitted(true);

    // Format WhatsApp message with user's inputted details
    const text = encodeURIComponent(
      `Hello Sofia Byrne,\n\nI would like to inquire about air duct cleaning services:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Service: ${formData.service}\n- Notes: ${formData.message || 'None'}`
    );
    const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${text}`;
    
    // Smooth redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.h2}
          description={business.contact.subheading}
          align="left"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 48px)',
            alignItems: 'start'
          }}
        >
          {/* Column 1: Direct Contact Information */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: 'var(--shadow-resting)'
            }}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: 'var(--color-ink)'
              }}
            >
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
              {business.contact.details.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {item.label}
                  </span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--color-ink)' }}>
                    {item.value}
                  </div>
                  <div>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '4px'
                      }}
                    >
                      {item.actionLabel} &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Button href={business.links.whatsapp} variant="primary">
                {business.cta.primary}
              </Button>
              <Button href={business.links.directions} variant="secondary">
                {business.cta.getDirections}
              </Button>
            </div>
          </div>

          {/* Column 2: Interactive Inquiry Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: 'var(--shadow-resting)'
            }}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: '8px',
                color: 'var(--color-ink)'
              }}
            >
              {business.contact.form.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', marginBottom: '24px' }}>
              Fill in your details and send directly to Sofia Byrne on WhatsApp.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '24px',
                  backgroundColor: 'var(--color-primary-light)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(91, 33, 182, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary)' }}>Inquiry Prepared</h4>
                </div>
                <p style={{ color: 'var(--color-ink)', fontSize: '0.95rem', marginBottom: '16px' }}>
                  WhatsApp should open automatically with your details. If not, tap the button below.
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button
                    href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                      `Hello Sofia Byrne, inquiry from ${formData.name} regarding ${formData.service}.`
                    )}`}
                    variant="primary"
                  >
                    Open WhatsApp Chat
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: business.servicesSection.services[0]?.title || 'Air Duct Cleaning',
                        message: ''
                      });
                    }}
                  >
                    Send Another
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="contact-name">{business.contact.form.nameLabel}</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder={business.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone">{business.contact.form.phoneLabel}</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={business.contact.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contact-service">{business.contact.form.serviceLabel}</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {business.servicesSection.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message">{business.contact.form.messageLabel}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    placeholder={business.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" variant="primary">
                  {business.contact.form.submitButton}
                </Button>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>
                  {business.contact.form.directPhoneNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
