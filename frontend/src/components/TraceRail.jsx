import React, { useEffect, useState } from "react";

const SECTIONS = ["Home", "About", "Skills", "Projects", "Credentials", "Contact"];

export default function TraceRail() {
  const [pct, setPct] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0);

      let current = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id.toLowerCase());
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) current = i;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="trace-rail">
      <div className="trace-track">
        <div className="trace-fill" style={{ height: `${pct}%` }} />
      </div>
      {SECTIONS.map((id, i) => (
        <div
          key={id}
          className={`trace-node ${i <= active ? "trace-node-on" : ""}`}
          style={{ top: `calc(6vh + ${(i / (SECTIONS.length - 1)) * 88}vh)` }}
        >
          <span className="trace-node-label">{id}</span>
        </div>
      ))}
    </div>
  );
}
