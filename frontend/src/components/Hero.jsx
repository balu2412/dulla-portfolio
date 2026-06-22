import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import CircuitRig from "./CircuitRig";
import { ACHIEVEMENTS } from "../data/content";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal as="div" className="eyebrow">
            <Sparkles size={14} />
            <span> FULL-STACK &amp; AI DEVELOPER</span>
          </Reveal>
          <Reveal as="h1" delay={80} className="hero-title">
            Dulla Bal<br />Reddy
          </Reveal>
          <Reveal as="p" delay={160} className="hero-sub">
            I build AI-driven, full-stack applications — from healthcare
            analytics to civic infrastructure — with Python, the MERN
            stack, and a habit of shipping things that actually solve problems.
          </Reveal>
          <Reveal as="div" delay={240} className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View Projects <ArrowUpRight size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </Reveal>
          <Reveal as="div" delay={320} className="hero-stats">
            {ACHIEVEMENTS.slice(0, 3).map((a) => (
              <div className="hero-stat" key={a.label}>
                <span className="hero-stat-value">{a.value}</span>
                <span className="hero-stat-label">{a.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="hero-visual">
          <CircuitRig />
        </div>
      </div>
      <div className="hero-scroll-cue">
        <span className="hero-scroll-line" />
        <span className="mono-tag">SCROLL</span>
      </div>
    </section>
  );
}
