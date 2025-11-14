"use client";

import { ReactNode } from "react";
import { Container } from "react-bootstrap";

type PageShellProps = {
  children: ReactNode;
  variant?: "dark" | "light";
};

export function PageShell({ children, variant = "dark" }: PageShellProps) {
  const sectionClass =
    variant === "light"
      ? "codim-section codim-section-light"
      : "codim-section codim-section-dark";

  return (
    <section className={sectionClass}>
      <Container className="codim-page-container">{children}</Container>
    </section>
  );
}
