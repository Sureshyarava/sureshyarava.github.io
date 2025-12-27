import React from 'react';
import { Section } from './Section';

export const Experience = ({ data }) => {
  return (
    <Section style={{ alignItems: "flex-start" }}>
      <div className="content-wrapper" style={{ borderLeft: "4px solid var(--accent-color)", paddingLeft: "1.5rem" }}>
        <h1 style={{ fontSize: "2.5em", margin: "0 0 1rem 0" }}>Experience</h1>
        {data.map((exp, index) => (
          <div key={index} style={{ marginBottom: "0.8rem" }}>
            <h3 style={{ margin: "0 0 0.2rem 0", fontSize: "1.2em" }}>
              {exp.role} <span style={{ fontWeight: "normal", fontSize: "0.9em", color: "var(--text-primary)" }}>@ {exp.company}</span>
            </h3>
            <p style={{ margin: "0 0 0.5rem 0", fontStyle: "italic", fontSize: "0.85em" }}>
              {exp.period}
            </p>
            <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.4" }}>
              {exp.details.map((detail, i) => (
                <li key={i} style={{ marginBottom: "0.3rem" }}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
