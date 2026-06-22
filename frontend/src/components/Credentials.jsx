import React from "react";
import { Award } from "lucide-react";
import Reveal from "./Reveal";
import { CERTIFICATIONS, ACHIEVEMENTS } from "../data/content";

export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <span className="mono-tag">// CREDENTIALS</span>
          <h2 className="section-title">Certifications &amp; achievements</h2>
        </Reveal>

        <div className="credentials-grid">
          <Reveal as="div" className="cred-col">
            <h3 className="cred-col-title">Certifications</h3>
            <ul className="cred-list">
              {CERTIFICATIONS.map((c) => (
                <li className="cred-item" key={c.name}>
                  <Award size={16} className="cred-icon" />
                  <div>
                    <p className="cred-name">{c.name}</p>
                    <p className="cred-org">{c.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={100} className="cred-col">
            <h3 className="cred-col-title">Achievements</h3>
            <div className="achv-grid">
              {ACHIEVEMENTS.map((a) => (
                <div className="achv-card" key={a.label}>
                  <span className="achv-value">{a.value}</span>
                  <span className="achv-label">{a.label}</span>
                  <span className="achv-detail">{a.detail}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
