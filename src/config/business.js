/**
 * Sofia Byrne - Air Duct Cleaning Services
 * Configuration File
 * 
 * Non-technical owners can edit ANY text, color, service, or image URL in this file
 * to update the entire website.
 */

export const business = {
  // Core Business Identity
  name: "Sofia Byrne",
  type: "Air duct cleaning services",
  tagline: "Breathe Cleaner, Live Better.",
  cityArea: "58d Bath Road Eye, Peterborough, England, PE6 7PY",
  fullAddress: "58d Bath Road Eye, Peterborough, England, PE6 7PY",

  // Contact Information
  phone: "447868205038",
  phoneDisplay: "+44 7868 205038",
  whatsapp: "447868205038",
  whatsappDisplay: "+44 7868 205038",
  email: null, // Omitted cleanly per business data
  openingHours: null, // Omitted cleanly per business data

  // Navigation Links
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  // Direct External Links & CTAs
  links: {
    whatsapp: "https://wa.me/447868205038?text=Hello%20Sofia%20Byrne%2C%20I%20would%20like%20to%20inquire%20about%20your%20air%20duct%20cleaning%20services.",
    phone: "tel:447868205038",
    directions: "https://www.google.com/maps/search/?api=1&query=58d+Bath+Road+Eye%2C+Peterborough%2C+England%2C+PE6+7PY",
    servicesAnchor: "#services",
    contactAnchor: "#contact"
  },

  // Brand Palette & Design Tokens
  theme: {
    primaryColor: "#5B21B6", // Refined deep purple
    primaryHover: "#4C1D95",
    primaryLight: "#F5F3FF",
    primarySubtle: "rgba(91, 33, 182, 0.08)",
    secondaryColor: "#FFFFFF",
    bgCanvas: "#FAFAFA",
    surfaceCard: "#FFFFFF",
    surfaceMuted: "#F4F4F5",
    ink: "#18181B",
    muted: "#52525B",
    subtleBorder: "rgba(24, 24, 27, 0.08)"
  },

  // Call-To-Action Labels
  cta: {
    primary: "Message on WhatsApp",
    secondary: "View Services",
    callNow: "Call Us",
    getDirections: "Get Directions",
    sendInquiry: "Send Message",
    quickQuote: "Request Quote"
  },

  // Hero Section
  hero: {
    eyebrow: "Eye, Peterborough · Professional Duct Care",
    h1: "Breathe Cleaner, Live Better.",
    subheading: "Dedicated air duct, HVAC, and ventilation cleaning for homes and workplaces across Peterborough. We remove trapped dust, mold spores, and allergens to restore healthy airflow.",
    bgImage: "/src/assets/images/hero_duct_cleaning_1791183890408.jpg",
    trustMarkers: [
      "Peterborough & Eye local service",
      "Residential & commercial ductwork",
      "Direct owner communication"
    ]
  },

  // Services Section
  servicesSection: {
    eyebrow: "Our Services",
    h2: "Thorough ventilation and duct hygiene",
    intro: "Dust, moisture, and debris quietly build up inside ventilation channels over time. We provide deep, meticulous cleaning to keep your systems operating safely.",
    services: [
      {
        id: "air-duct-cleaning",
        title: "Air Duct Cleaning",
        description: "Full-system clearing of main supply and return trunks, extracting deep-seated dust and household particles.",
        image: "/src/assets/images/service_duct_vacuum_1791183909277.jpg"
      },
      {
        id: "hvac-duct-cleaning",
        title: "HVAC Duct Cleaning",
        description: "Clearing heating and cooling distribution channels to relieve mechanical strain and optimize airflow.",
        image: "/src/assets/images/service_vent_sanitizing_1791183923516.jpg"
      },
      {
        id: "vent-cleaning",
        title: "Vent Cleaning",
        description: "Precision extraction of built-up grime, dander, and grit from individual ceiling, wall, and floor vents.",
        image: "/src/assets/images/about_technician_inspection_1791183936963.jpg"
      },
      {
        id: "dryer-vent-cleaning",
        title: "Dryer Vent Cleaning",
        description: "Essential clearing of combustible lint accumulations from dryer exhaust runs to prevent fire hazards.",
        image: "/src/assets/images/service_duct_vacuum_1791183909277.jpg"
      },
      {
        id: "ac-duct-cleaning",
        title: "AC Duct Cleaning",
        description: "Cooling line duct maintenance that neutralizes damp odors and removes summer particulate build-up.",
        image: "/src/assets/images/service_vent_sanitizing_1791183923516.jpg"
      },
      {
        id: "residential-duct-cleaning",
        title: "Residential Duct Cleaning",
        description: "Tailored duct hygiene for houses, flats, and bungalows in Peterborough to improve daily family air quality.",
        image: "/src/assets/images/hero_duct_cleaning_1791183890408.jpg"
      },
      {
        id: "commercial-duct-cleaning",
        title: "Commercial Duct Cleaning",
        description: "Clean airflow upkeep for commercial premises, retail units, and offices across the Peterborough area.",
        image: "/src/assets/images/about_technician_inspection_1791183936963.jpg"
      },
      {
        id: "air-vent-sanitizing",
        title: "Air Vent Sanitizing",
        description: "Targeted sanitizing treatment to neutralize biological contaminants and lingering stale odors inside vents.",
        image: "/src/assets/images/service_vent_sanitizing_1791183923516.jpg"
      },
      {
        id: "duct-mold-removal",
        title: "Duct Mold Removal",
        description: "Careful remediation of mold build-up and damp deposits that degrade indoor atmosphere and duct surfaces.",
        image: "/src/assets/images/service_duct_vacuum_1791183909277.jpg"
      },
      {
        id: "dust-debris-removal",
        title: "Dust & Debris Removal",
        description: "High-power extraction of post-renovation drywall dust, insulation fibers, and accumulated room grit.",
        image: "/src/assets/images/about_technician_inspection_1791183936963.jpg"
      },
      {
        id: "hvac-system-cleaning",
        title: "HVAC System Cleaning",
        description: "Comprehensive clearing of ventilation housings and critical airflow pathways for balanced efficiency.",
        image: "/src/assets/images/service_vent_sanitizing_1791183923516.jpg"
      },
      {
        id: "indoor-air-quality-cleaning",
        title: "Indoor Air Quality Cleaning",
        description: "Full-property ventilation decontamination that alleviates allergy triggers and keeps interior air crisp.",
        image: "/src/assets/images/hero_duct_cleaning_1791183890408.jpg"
      }
    ]
  },

  // About Section
  about: {
    eyebrow: "About Sofia Byrne",
    h2: "Dedicated local duct cleaning in Eye & Peterborough",
    paragraphs: [
      "Based at 58d Bath Road Eye, Sofia Byrne provides professional air duct and ventilation cleaning directly to homeowners, landlords, and local businesses.",
      "Ventilation ductwork runs hidden behind walls and ceilings. Over time, it gathers dust, pet hair, allergen matter, and moisture. Left unchecked, this buildup circulates through every room whenever heating or cooling runs.",
      "We take pride in doing the job thoroughly and cleanly. From initial inspection to deep vacuuming and sanitizing, every duct and vent register is treated with meticulous care."
    ],
    image: "/src/assets/images/about_technician_inspection_1791183936963.jpg",
    imageCaption: "Sofia Byrne Duct Cleaning · Eye, Peterborough"
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    h2: "Clean air, honest service, reliable local care",
    points: [
      {
        number: "01",
        title: "Local Eye & Peterborough Service",
        description: "Conveniently based on Bath Road in Eye, offering timely visits and genuine local accountability."
      },
      {
        number: "02",
        title: "Full-Spectrum Ventilation Cleaning",
        description: "Equipped to handle everything from domestic dryer vents to commercial HVAC network cleaning."
      },
      {
        number: "03",
        title: "Mold, Allergen & Debris Extraction",
        description: "Targeted sanitizing and extraction that addresses persistent odors, dust layers, and mold spores."
      },
      {
        number: "04",
        title: "Direct WhatsApp & Phone Booking",
        description: "No middlemen or call center queues. Message or call directly to get your questions answered."
      }
    ]
  },

  // FAQ Section
  faq: {
    eyebrow: "Frequently Asked Questions",
    h2: "Helpful answers about duct cleaning",
    items: [
      {
        question: "How often should air ducts and vents be cleaned?",
        answer: "For most homes, a thorough cleaning every 2 to 3 years is recommended. If you have pets, household members with allergies, or have recently completed building or plastering work, more frequent cleaning is advised."
      },
      {
        question: "What are the common signs of clogged or dirty ducts?",
        answer: "Signs include visible dust puffs from vent covers when heating or air conditioning starts up, rooms smelling musty, rapid dust accumulation on furniture, and unusually long clothes drying cycles."
      },
      {
        question: "Do you service both residential homes and commercial premises?",
        answer: "Yes, we handle residential properties including houses, bungalows, and flats, as well as local commercial spaces, retail units, and offices across Eye and Peterborough."
      },
      {
        question: "How do I book or get a quotation?",
        answer: "Tap 'Message on WhatsApp' or call 447868205038 with details of your property, your location, and the services you require for a quick, straightforward response."
      }
    ]
  },

  // Testimonials / Reviews (Omitted cleanly per prompt rules: "include ONLY if {{TESTIMONIALS}} contains real content. If none provided, omit this section entirely")
  testimonials: null,

  // Contact Section
  contact: {
    eyebrow: "Contact Sofia Byrne",
    h2: "Get in touch for cleaner indoor air",
    subheading: "Contact us directly via WhatsApp or phone, or submit your details below to request a service visit.",
    details: [
      {
        label: "Address",
        value: "58d Bath Road Eye, Peterborough, England, PE6 7PY",
        actionLabel: "View on Google Maps",
        href: "https://www.google.com/maps/search/?api=1&query=58d+Bath+Road+Eye%2C+Peterborough%2C+England%2C+PE6+7PY"
      },
      {
        label: "WhatsApp",
        value: "+44 7868 205038",
        actionLabel: "Chat on WhatsApp",
        href: "https://wa.me/447868205038?text=Hello%20Sofia%20Byrne%2C%20I%20would%20like%20to%20inquire%20about%20your%20air%20duct%20cleaning%20services."
      },
      {
        label: "Phone",
        value: "+44 7868 205038",
        actionLabel: "Call Now",
        href: "tel:447868205038"
      }
    ],
    form: {
      title: "Send an inquiry",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "e.g. 07868 205038",
      serviceLabel: "Service Needed",
      serviceDefault: "Air Duct Cleaning",
      messageLabel: "Property & Ventilation Details",
      messagePlaceholder: "Please describe your property type and any specific issues (e.g. 3-bed semi in Eye, dryer vent inspection)...",
      submitButton: "Send Inquiry via WhatsApp",
      directPhoneNote: "Prefer to speak right now? Call us at +44 7868 205038."
    }
  },

  // Footer Section
  footer: {
    tagline: "Breathe Cleaner, Live Better.",
    serviceArea: "Serving Eye, Peterborough and surrounding Cambridgeshire communities.",
    address: "58d Bath Road Eye, Peterborough, England, PE6 7PY",
    phoneDisplay: "+44 7868 205038",
    whatsappDisplay: "+44 7868 205038",
    year: 2026
  }
};
