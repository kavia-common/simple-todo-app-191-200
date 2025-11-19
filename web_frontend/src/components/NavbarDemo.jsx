import React from "react";
import { Navbar } from "./Navbar";

/**
 * Demo component for the Navbar showing usage with props, rightContent and sticky mode.
 * Does not affect app's main layout.
 */
// PUBLIC_INTERFACE
export function NavbarDemo() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "120px", borderRadius: 12 }}>
      <Navbar
        title={<span><b style={{ color: "#3b82f6" }}>Kavia</b> Demo</span>}
        sticky={false}
        rightContent={
          <div>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#64748b",
                background: "none",
                border: "none",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 4,
                marginRight: 4,
                textDecoration: "none",
                transition: "background .16s,color .16s",
              }}
              onMouseOver={e => (e.currentTarget.style.background="#e3edfc")}
              onMouseOut={e => (e.currentTarget.style.background="none")}
            >
              Docs
            </a>
            <button
              style={{
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                padding: "7px 17px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 1.5px 8px 0 rgba(59,130,246,0.12)",
                marginLeft: 2,
                cursor: "pointer",
                transition: "background .17s"
              }}
              onMouseOver={e => (e.currentTarget.style.background="#2563eb")}
              onMouseOut={e => (e.currentTarget.style.background="#3b82f6")}
            >
              Sign Up
            </button>
          </div>
        }
      />
    </div>
  );
}
