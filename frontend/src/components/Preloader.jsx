import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader ${hide ? "preloader-out" : ""}`} aria-hidden={hide}>
      <div className="preloader-inner">
        <div className="preloader-mark">DB<span className="dot">.</span></div>
        <div className="preloader-bar"><span /></div>
        <div className="preloader-caption">booting_portfolio.exe</div>
      </div>
    </div>
  );
}
