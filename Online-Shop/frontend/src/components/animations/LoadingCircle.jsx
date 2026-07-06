"use client";

import styles from "./loading_circle.module.css";

export default function LoadingCircle({
  size = "2rem",
  color = "var(--color-primary)",
  thickness = "0.35rem",
  style = {},
}) {
  return (
    <div
      className={styles.spinner}
      style={{
        width: size,
        height: size,
        border: `${thickness} solid rgba(0,0,0,0.12)`,
        borderTop: `${thickness} solid ${color}`,
        ...style,
      }}
    />
  );
}
