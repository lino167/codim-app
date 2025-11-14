"use client";

import Link from "next/link";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";

const heroStats = [
  { value: "40+", label: "Projetos em produção" },
  { value: "8x", label: "ROI médio dos clientes" },
  { value: "24h", label: "Tempo até os primeiros entregáveis" },
];

const heroHighlights = [
  "Sistemas customizados do zero",
  "Automações e bots de operação",
  "Integrações com APIs estratégicas",
];

export function HeroSection() {
  return (
    <section className="codim-hero codim-section">
      <Container className="codim-hero__content position-relative">
        <Row className="align-items-center g-5">
          <Col lg={7} className="codim-reveal">
            <p className="codim-section-heading mb-3">Codim • Tech Studio</p>
            <h1 className="codim-hero__title mb-4">Código com propósito.</h1>
            <p className="codim-hero__subtitle mb-4">
              Transformamos ideias em produtos digitais escaláveis, combinando
              desenvolvimento, automação e design para acelerar o crescimento do
              seu negócio.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Button
                as={Link}
                href="/portifolio"
                className="codim-btn-primary codim-cta-pulse"
                bsPrefix="codim-btn"
              >
                Ver projetos
              </Button>
              <Button
                as={Link}
                href="/briefing"
                className="codim-btn-secondary"
                bsPrefix="codim-btn"
              >
                Contratar agora
              </Button>
            </div>
            <Stack gap={2}>
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="d-flex align-items-center gap-3 text-uppercase small"
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      borderRadius: "999px",
                      background: "var(--codim-primary)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </Stack>
          </Col>
          <Col lg={5} className="codim-reveal">
            <Card className="codim-card border-0 text-white">
              <Card.Body>
                <p className="text-uppercase small mb-2">Visão rápida</p>
                <h2 className="h4 text-uppercase mb-4">
                  Operação, automação e produto em uma mesma mesa.
                </h2>
                <ul className="list-unstyled mb-4 small">
                  <li className="mb-2">• Planejamento técnico e visual</li>
                  <li className="mb-2">• Execução enxuta com ciclos semanais</li>
                  <li className="mb-2">• Squad flexível e orientado a dados</li>
                  <li className="mb-0">• Contratos e propostas na plataforma</li>
                </ul>
                <Row className="g-3">
                  {heroStats.map((stat) => (
                    <Col xs={4} key={stat.label}>
                      <div className="codim-hero__stat">
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
