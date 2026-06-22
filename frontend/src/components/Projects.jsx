import React from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { PROJECTS, MORE_BUILDS } from "../data/content";

function ProjectCard({ p, i }) {
  return (
    <Reveal as="article" delay={i * 90} className="project-card">
      <div className="project-card-head">
        <span className={`status-chip status-${p.status.replace(/\s+/g, "-").toLowerCase()}`}>
          {p.status}
        </span>
        <div className="project-metrics">
          {p.metrics.map((m) => (
            <div className="project-metric" key={m.label}>
              <span className="project-metric-value">{m.value}</span>
              <span className="project-metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="project-title">{p.title}</h3>
      <p className="project-subtitle">{p.subtitle}</p>
      <p className="project-desc">{p.description}</p>
      <div className="project-stack">
        {p.stack.map((s) => <span className="stack-tag" key={s}>{s}</span>)}
      </div>
      <a className="btn btn-gitlink" href={p.repo} target="_blank" rel="noopener noreferrer">
        <Github size={16} /> GitLink <ExternalLink size={13} />
      </a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section-tint">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <span className="mono-tag">// PROJECTS</span>
          <h2 className="section-title">Things I've shipped</h2>
        </Reveal>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard p={p} i={i} key={p.title} />)}
        </div>

        <Reveal as="div" delay={120} className="more-builds">
          <span className="mono-tag mono-tag-muted">MORE ON GITHUB</span>
          <div className="more-builds-row">
            {MORE_BUILDS.map((m) => (
              <a key={m.name} href={m.repo} target="_blank" rel="noopener noreferrer" className="more-chip">
                {m.name} <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
