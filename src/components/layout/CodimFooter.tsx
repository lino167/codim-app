"use client";

import { Container } from "react-bootstrap";

export function CodimFooter() {
  return (
    <footer className="border-top border-secondary-subtle py-3 mt-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="small">
          Copyright {new Date().getFullYear()} Codim. Todos os direitos reservados.
        </span>
        <span className="small">
          Desenvolvimento sob medida - Automacao - Dashboards
        </span>
      </Container>
    </footer>
  );
}
