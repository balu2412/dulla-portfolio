import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import Reveal from "./Reveal";
import { PROFILE } from "../data/content";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | sending | ok | err

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ state: "ok", message: "Message sent — I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "err",
        message: "Couldn't reach the server — make sure the backend is running, or email me directly.",
      });
    }
  };

  return (
    <section id="contact" className="section section-tint">
      <div className="section-inner">
        <Reveal as="div" className="section-head">
          <span className="mono-tag">// CONTACT</span>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-lead">
            Open to internships, hackathons and collaborations. Reach out directly or drop a note below.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div" className="contact-info">
            <a className="contact-row" href={`mailto:${PROFILE.email}`}>
              <Mail size={18} /> {PROFILE.email}
            </a>
            <a className="contact-row" href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}>
              <Phone size={18} /> {PROFILE.phone}
            </a>
            <span className="contact-row contact-row-static">
              <MapPin size={18} /> {PROFILE.location}
            </span>
            <div className="contact-socials">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Github size={18} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                <Linkedin size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal as="form" delay={100} className="contact-form" onSubmit={submit}>
            <label className="field">
              <span>Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me what you're building..."
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block" disabled={status.state === "sending"}>
              {status.state === "sending" ? "Sending..." : <>Send message <Send size={15} /></>}
            </button>
            {status.message && (
              <p className={`form-status ${status.state === "ok" ? "form-status-ok" : "form-status-err"}`}>
                {status.message}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
