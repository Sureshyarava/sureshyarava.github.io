import React from 'react';
import { Section } from './Section';

export const Projects = ({ data }) => {
  return (
    <Section style={{ alignItems: "flex-end", textAlign: "right" }}>
      <div className="content-wrapper" style={{ borderRight: "4px solid var(--accent-color)", paddingRight: "2rem" }}>
        <h1 style={{ fontSize: "2.5em", margin: "0 0 1rem 0" }}>Projects</h1>
        {data.map((project, index) => (
          <div key={index} style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.4em", margin: "0 0 0.5rem 0" }}>{project.title}</h3>
            <p style={{ marginLeft: "auto", lineHeight: "1.6" }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
