import React from 'react';
import { Section } from './Section';
import { Icons } from './Icons';

export const Contact = ({ data }) => {
  return (
    <Section style={{ alignItems: "flex-start" }}>
      <div className="content-wrapper" style={{ borderLeft: "4px solid var(--accent-color)", paddingLeft: "2rem" }}>
        <h1 style={{ fontSize: "3em", margin: "0 0 2rem 0" }}>Get In Touch</h1>
        <p style={{ fontSize: "1.3em", margin: "0 0 1rem 0", color: "var(--text-primary)" }}>
          {data.location}
        </p>
        <p style={{ fontSize: "1.3em", margin: "0 0 2rem 0", color: "var(--text-secondary)" }}>
          {data.email}
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {data.links.map((link, index) => {
            let Icon = null;
            if (link.name === "GitHub") Icon = Icons.GitHub;
            if (link.name === "LinkedIn") Icon = Icons.LinkedIn;
            if (link.name === "LeetCode") Icon = Icons.LeetCode;
            if (link.name === "CodeForces") Icon = Icons.CodeForces;

            if (!Icon) return null;

            return (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.2s" }}>
                <Icon width={36} height={36} />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
