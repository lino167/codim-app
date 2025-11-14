"use client";

import { Container } from "react-bootstrap";

export function CodimFooter() {
  return (
    <footer className="codim-section codim-section-dark border-top border-0">
      <Container className="d-flex flex-column flex-lg-row justify-content-between gap-4">
        <div>
          <p className="codim-section-heading mb-2">Codim</p>
          <p className="mb-0 text-uppercase small">
            Codigo com proposito • Tech Studio
          </p>
        </div>
        <div className="d-flex flex-column flex-sm-row gap-3 text-uppercase small">
          <a href="/sobre">Sobre</a>
          <a href="/servicos">Servicos</a>
          <a href="/portifolio">Projetos</a>
          <a href="/contato">Briefing</a>
        </div>
        <div className="d-flex flex-column gap-1 small">
          <a href="mailto:contato@codim.tech">contato@codim.tech</a>
          <span>LinkedIn • GitHub • Instagram</span>
        </div>
        <div className="small text-uppercase">
          © 2025 Codim — Codigo com proposito.
        </div>
      </Container>
    </footer>
  );
}
