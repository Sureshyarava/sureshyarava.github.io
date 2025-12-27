import React from 'react';
import { Section } from './Section';

export const Intro = ({ data }) => {
  return (
    <Section style={{ alignItems: "flex-start" }}>
      <div className="content-wrapper" style={{ borderLeft: "4px solid var(--accent-color)", paddingLeft: "2rem" }}>
        <h1 style={{ fontSize: "5em", margin: 0, lineHeight: "0.9" }}>
          {data.name.split(' ').map((word, i) => (
            <span key={i} style={{ display: "block" }}>{word}</span>
          ))}
        </h1>
        <h2 style={{ 
          fontSize: "1.5em", 
          fontWeight: 300, 
          marginTop: "1rem", 
          color: "var(--text-secondary)",
          letterSpacing: "0.05em",
          textTransform: "uppercase"
        }}>
          {data.title}
        </h2>
        <p style={{ marginTop: "2em", fontSize: "1.1em" }}>
          {data.description}
        </p>
      </div>
    </Section>
  );
};
