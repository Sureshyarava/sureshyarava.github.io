import React from 'react';

export const Section = ({ children, style }) => {
  return (
    <section
      className="section-container"
      style={{
        ...style
      }}
    >
      {children}
    </section>
  );
};
