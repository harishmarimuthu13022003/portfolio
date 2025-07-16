import React from 'react';

const SectionHeading = ({ 
  title, 
  subtitle, 
  description, 
  centered = true, 
  gradient = true,
  className = "" 
}) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`} data-aos="fade-up">
      {/* Subtitle */}
      {subtitle && (
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-primary-600 to-accent-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            {subtitle}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2 className={`heading-secondary mb-4 ${
        gradient ? 'gradient-text' : 'text-primary-700'
      }`}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={`text-large max-w-3xl ${
          centered ? 'mx-auto' : ''
        } text-gray-700`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;