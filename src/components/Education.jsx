import React from 'react';
import { Section } from './Section';

export const Education = ({ data }) => {
  return (
    <Section style={{ alignItems: "flex-end", textAlign: "right" }}>
      <div className="content-wrapper" style={{ borderRight: "4px solid var(--accent-color)", paddingRight: "2rem" }}>
        <h1 style={{ fontSize: "2.5em", margin: "0 0 1.5rem 0" }}>Education</h1>
        {data.map((edu, index) => (
          <div key={index} style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.4em", margin: "0 0 0.5rem 0" }}>{edu.school}</h3>
            <p style={{ fontSize: "1.1em", color: "var(--text-primary)", margin: "0 0 0.5rem 0" }}>
              {edu.degree}
            </p>
            <p style={{ fontStyle: "italic", fontSize: "0.9em" }}>
              {edu.period} | {edu.location}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
