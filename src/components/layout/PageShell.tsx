"use client";

import { ReactNode } from "react";
import { Container } from "react-bootstrap";

type PageShellProps = {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export function PageShell({
  children,
  variant = "dark",
  className,
}: PageShellProps) {
  const baseClass =
    variant === "light"
      ? "codim-section codim-section-light"
      : "codim-section codim-section-dark";

  return (
    <section className={`${baseClass} ${className ?? ""}`}>
      <Container className="codim-page-container">{children}</Container>
    </section>
  );
}
