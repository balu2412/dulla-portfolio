import React from "react";
import { Code2, Globe, Layers, Cloud, Database, Terminal } from "lucide-react";
import Reveal from "./Reveal";
import { SKILL_GROUPS } from "../data/content";

// content.js stores icon names as strings (so the data file stays plain JSON-able);
// this maps those strings back to the actual lucide components.
const ICON_MAP = { Code2, Globe, Layers, Cloud, Database, Terminal };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <span className="mono-tag">// SKILLS</span>
          <h2 className="section-title">Tools I reach for</h2>
        </Reveal>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = ICON_MAP[g.icon] || Code2;
            return (
              <Reveal as="div" delay={i * 60} className="skill-card" key={g.label}>
                <div className="skill-card-icon"><Icon size={18} /></div>
                <h3 className="skill-card-title">{g.label}</h3>
                <div className="skill-chips">
                  {g.items.map((s) => (
                    <span className="skill-chip" key={s}>{s}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
