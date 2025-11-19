import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

/**
 * Navbar component for displaying a header bar with brand/title on the left and space for actions/links on the right.
 *
 * Props:
 *   - title?: string (Left-aligned title, accepts node/string)
 *   - rightContent?: ReactNode (Right-aligned content, e.g. buttons, nav links)
 *   - className?: string (Additional CSS classes)
 *   - sticky?: boolean (Stick to top of viewport, adds shadow)
 */
// PUBLIC_INTERFACE
export function Navbar({ title, rightContent, className = "", sticky = false }) {
  return (
    <nav
      className={[
        styles.navbar,
        sticky ? styles.sticky : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={title ? `${typeof title === "string" ? title : "Site"} navigation` : "Main navigation"}
    >
      <div className={styles.inner}>
        <div className={styles.brand} tabIndex={0}>
          {/* Supports both string and node for brand/title */}
          {title || <span className={styles.placeholder}>Brand</span>}
        </div>
        <div className={styles.right}>
          {rightContent}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.node,
  rightContent: PropTypes.node,
  className: PropTypes.string,
  sticky: PropTypes.bool,
};

Navbar.defaultProps = {
  title: undefined,
  rightContent: null,
  className: "",
  sticky: false,
};
