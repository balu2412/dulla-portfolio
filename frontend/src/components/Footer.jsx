import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Dulla Bal Reddy</span>
      <span className="footer-tag mono-tag mono-tag-muted">BUILT WITH THE MERN STACK</span>
    </footer>
  );
}
