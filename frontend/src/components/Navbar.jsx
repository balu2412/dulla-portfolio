import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-solid" : ""}`}>
      <div className="navbar-row">
        <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); go("home"); }}>
          DB<span className="accent-text">.</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <button key={l} className="nav-link" onClick={() => go(l)}>{l}</button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => go("Contact")}>
          Let's talk
        </button>
        <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`nav-mobile ${open ? "nav-mobile-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l} className="nav-mobile-link" onClick={() => go(l)}>{l}</button>
        ))}
      </div>
    </nav>
  );
}
