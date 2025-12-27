import React from 'react';
import { Section } from './Section';

export const About = ({ data }) => {
  return (
    <Section style={{ alignItems: "flex-end", textAlign: "right" }}>
      <div className="content-wrapper" style={{ borderRight: "4px solid var(--accent-color)", paddingRight: "2rem" }}>
        <h1 style={{ fontSize: "3em", margin: "0 0 1rem 0" }}>About Me</h1>
        <p style={{ 
          fontSize: "1.1em", 
          lineHeight: "1.8",
          marginLeft: "auto" 
        }}>
          {data.description}
        </p>
      </div>
    </Section>
  );
};
