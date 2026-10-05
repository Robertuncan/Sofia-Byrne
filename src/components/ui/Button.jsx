import React from 'react';

/**
 * Button component supporting primary, secondary, white, and outline-white variants.
 * Renders as <a> if href is provided, otherwise <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  target,
  rel,
  ariaLabel
}) {
  const baseClasses = `btn btn-${variant} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target || (isExternal && href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (isExternal && href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
