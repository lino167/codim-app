"use client";

import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export function FinalCTA() {
  return (
    <section className="codim-section codim-section-dark">
      <Container>
        <div className="codim-cta p-4 p-lg-5 codim-reveal">
          <p className="codim-section-heading mb-2">
            Chamado para quem quer ir além
          </p>
          <h2 className="codim-page-title mb-3">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="codim-page-subtitle mb-4">
            Estruture seu projeto com briefing guiado, proposta transparente e
            execução tech de ponta a ponta.
          </p>
          <Button
            as={Link}
            href="/briefing"
            className="codim-btn-primary codim-cta-pulse"
            bsPrefix="codim-btn"
          >
            Começar um projeto
          </Button>
        </div>
      </Container>
    </section>
  );
}
