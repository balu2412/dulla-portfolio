import React from "react";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { EDUCATION } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section section-tint">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <span className="mono-tag">// ABOUT</span>
          <h2 className="section-title">A bit about how I got here</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal as="div" className="about-photo">
            <div className="about-photo-frame">
              
              <img src="/photo.png" alt="Dulla Bal Reddy" />
            </div>
            <span className="mono-tag mono-tag-muted about-photo-caption">Bal Reddy</span>
          </Reveal>

          <Reveal as="p" delay={60} className="about-text">
            I'm an Electronics &amp; Communication Engineering undergraduate with a
            strong pull toward software — specifically, AI-driven applications
            that touch real infrastructure. My work spans healthcare analytics
            and smart civic systems, built with OpenCV, REST APIs and the
            MERN stack. I'm Microsoft and IBM certified in Generative AI and
            Data Science, I'm working throughLeetCode — 200+ problems solved so
            far, mostly medium and hard.
          </Reveal>

          <Reveal as="div" delay={100} className="timeline">
            {EDUCATION.map((ed, i) => (
              <div className="timeline-row" key={ed.school}>
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                  {i !== EDUCATION.length - 1 && <span className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <span className="mono-tag mono-tag-muted">{ed.period}</span>
                  <h3 className="timeline-school">
                    <GraduationCap size={16} /> {ed.school}
                  </h3>
                  <p className="timeline-detail">{ed.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
