import React from "react";
import { Card } from "./Card";
import { NavbarDemo } from "./NavbarDemo";

/**
 * Demo component that shows usage of the Card component, with subtitle, footer, divider,
 * visual styling according to the #3b82f6 (primary), #64748b (secondary), #06b6d4 (success), #111827 (text) theme.
 */
// PUBLIC_INTERFACE
export function CardDemo() {
  // Example timestamp, would be dynamic in real world usage
  const now = new Date();
  const prettyTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc"
      }}
    >
      {/* Navbar demo (visually distinct, does not affect the rest of the layout) */}
      <NavbarDemo />
      
      {/* Custom className for spacing example */}
      <Card
        title={
          <span>
            Demo Card
            <span
              style={{
                display: "block",
                fontWeight: 400,
                fontSize: "1rem",
                color: "#64748b",
                marginTop: "0.1em"
              }}
            >
              {/* Subtitle/Description, styled as instructed */}
              A flexible card with light theme design details.
            </span>
          </span>
        }
        variant="elevated"
        className="card-demo-extra-spacing"
      >
        {/* Card body area */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#111827", fontSize: "1.03rem", marginBottom: 8 }}>
            This is an example of a reusable <b>Card</b> component.
          </p>
          <p style={{ fontSize: "0.92rem", color: "#64748b", marginTop: "0.5rem" }}>
            Styled with <span style={{ color: "#3b82f6" }}>primary</span>, <span style={{ color: "#64748b" }}>secondary</span>, and <span style={{ color: "#06b6d4" }}>success</span> accents.
          </p>
        </div>
        {/* Divider between body and footer */}
        <div
          style={{
            width: "100%",
            height: 1,
            margin: "1.2rem 0 0.7rem 0",
            background: "linear-gradient(90deg, #3b82f610, #e5e7eb 60%, #3b82f610)",
            border: "none"
          }}
        />
        {/* Footer helper text/timestamp */}
        <div
          style={{
            fontSize: "0.88rem",
            color: "#64748b",
            fontStyle: "italic",
            textAlign: "center",
            width: "100%",
            paddingTop: "0.2em",
            letterSpacing: "0.01em"
          }}
        >
          Demo rendered at <span style={{ color: "#06b6d4", fontWeight: 500 }}>{prettyTime}</span>
        </div>
      </Card>

      {/* Inline style to demo the .card-demo-extra-spacing tweak, non-breaking */}
      <style>{`
        .card-demo-extra-spacing {
          margin-top: 2.5rem !important;
          margin-bottom: 2.5rem !important;
          padding-bottom: 2.2rem !important;
        }
        @media (max-width: 480px) {
          .card-demo-extra-spacing {
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
