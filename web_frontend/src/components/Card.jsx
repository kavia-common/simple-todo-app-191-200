import React from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

/**
 * Card component for displaying content in a styled card surface.
 * 
 * Props:
 *   - title?: string (optional title)
 *   - children: ReactNode (content)
 *   - className?: string (additional class names)
 *   - variant?: 'default' | 'elevated' (card appearance)
 */
// PUBLIC_INTERFACE
export function Card({ title, children, className = "", variant = "default" }) {
  const variantClass = variant === "elevated" ? styles.elevated : styles.default;
  return (
    <section className={`${styles.card} ${variantClass} ${className}`}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </section>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "elevated"]),
};
