import React from 'react';
import { Section } from './Section';

export const Skills = ({ data }) => {
  const categories = [
    { title: "Languages", items: data.languages },
    { title: "Backend Frameworks", items: data.backend },
    { title: "Frontend", items: data.frontend },
    { title: "Distributed Systems", items: data.distributed },
    { title: "Databases & Storage", items: data.databases },
    { title: "Cloud & DevOps", items: data.cloud },
    { title: "Data/ML", items: data.data },
    { title: "Tools", items: data.tools }
  ];

  return (
    <Section style={{ alignItems: "flex-start" }}>
      <div className="content-wrapper" style={{ borderLeft: "4px solid var(--accent-color)", paddingLeft: "2rem" }}>
        <h1 style={{ fontSize: "2.5em", margin: "0 0 1.5rem 0" }}>Skills</h1>
        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 style={{ 
                fontSize: "1.1em", 
                marginBottom: "0.5rem", 
                color: "var(--text-primary)",
                borderBottom: "2px solid #ddd",
                paddingBottom: "0.2rem",
                display: "inline-block",
                fontFamily: "Times New Roman, serif"
              }}>
                {category.title}
              </h3>
              <p style={{ lineHeight: "1.5", color: "var(--text-secondary)", fontSize: "0.95em", margin: 0 }}>
                {category.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
