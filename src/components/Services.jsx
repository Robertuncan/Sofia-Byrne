import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

/**
 * Services Section:
 * - 3-column elevated responsive grid
 * - Image cards with smooth zoom, refined typography, and WhatsApp conversion action
 * - Optional interactive category filter to view all or specific types
 */
export default function Services({ business, onSelectService }) {
  const [filter, setFilter] = useState('all');
  const services = business.servicesSection.services;

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'residential', label: 'Residential & Dryer' },
    { id: 'hvac', label: 'HVAC & Ductwork' },
    { id: 'specialized', label: 'Sanitizing & Mold' }
  ];

  const filteredServices = services.filter((s) => {
    if (filter === 'residential') {
      return (
        s.id.includes('residential') ||
        s.id.includes('dryer') ||
        s.id.includes('vent-cleaning') ||
        s.id.includes('indoor')
      );
    }
    if (filter === 'hvac') {
      return (
        s.id.includes('hvac') ||
        s.id.includes('air-duct') ||
        s.id.includes('ac-duct') ||
        s.id.includes('commercial')
      );
    }
    if (filter === 'specialized') {
      return (
        s.id.includes('mold') ||
        s.id.includes('sanitizing') ||
        s.id.includes('dust-debris')
      );
    }
    return true;
  });

  return (
    <section id="services" className="section">
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          <SectionHeading
            eyebrow={business.servicesSection.eyebrow}
            title={business.servicesSection.h2}
            description={business.servicesSection.intro}
            align="left"
          />

          {/* Interactive Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              backgroundColor: 'var(--color-surface-subtle)',
              padding: '6px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)'
            }}
          >
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--color-muted)'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Across Elevated Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px'
          }}
          className="services-grid"
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              whatsappBaseUrl={business.links.whatsapp.split('?')[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
