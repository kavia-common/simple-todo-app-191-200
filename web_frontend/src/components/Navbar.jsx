import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

/**
 * Navbar component for displaying a header bar with a brand/title.
 *
 * Props:
 *   - title?: string or ReactNode (Left-aligned title, accepts node/string)
 *   - className?: string (Additional CSS classes)
 */
// PUBLIC_INTERFACE
export function Navbar({ title, className = "" }) {
  return (
    <nav
      className={[styles.navbar, className].filter(Boolean).join(" ")}
      aria-label={
        title
          ? `${typeof title === "string" ? title : "Site"} navigation`
          : "Main navigation"
      }
    >
      <div className={styles.inner}>
        <div className={styles.brand} tabIndex={0}>
          {/* Supports both string and node for brand/title */}
          {title || <span className={styles.placeholder}>Brand</span>}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.node,
  className: PropTypes.string,
};

Navbar.defaultProps = {
  title: undefined,
  className: "",
};
