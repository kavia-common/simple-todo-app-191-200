import React from "react";
import { Navbar } from "./Navbar";

/**
 * Demo component for the Navbar showing usage with only essential props.
 * Does not affect app's main layout.
 */
// PUBLIC_INTERFACE
export function NavbarDemo() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "120px", borderRadius: 12 }}>
      <Navbar
        title={
          <span>
            <b style={{ color: "#3b82f6" }}>Kavia</b> Demo
          </span>
        }
      />
    </div>
  );
}
