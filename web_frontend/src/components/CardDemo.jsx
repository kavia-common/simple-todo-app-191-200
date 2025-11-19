import React from "react";
import { Card } from "./Card";

/**
 * Demo component that shows usage of the Card component.
 */
// PUBLIC_INTERFACE
export function CardDemo() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f8fafc"
    }}>
      <Card title="Demo Card" variant="elevated">
        <p>This is an example of a reusable <b>Card</b> component.</p>
        <p style={{ fontSize: "0.92rem", color: "#64748b", marginTop: "0.5rem" }}>
          Styled using the light theme with custom shadow and accent colors.
        </p>
      </Card>
    </div>
  );
}
