"use client";

import Link from "next/link";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";

const heroStats = [
  { value: "40+", label: "Projetos em producao" },
  { value: "8x", label: "ROI medio dos clientes" },
  { value: "24h", label: "Tempo ate primeiros entregaveis" },
];

const heroHighlights = [
  "Sistemas customizados do zero",
  "Automacoes e bots de operacao",
  "Integracoes com APIs estrategicas",
];

export function HeroSection() {
  return (
    <section className="codim-hero codim-section">
      <Container className="codim-hero__content position-relative">
        <Row className="align-items-center g-5">
          <Col lg={7} className="codim-reveal">
            <p className="codim-section-heading mb-3">Codim • Startup Tech</p>
            <h1 className="codim-hero__title mb-4">Codigo com proposito.</h1>
            <p className="codim-hero__subtitle mb-4">
              Transformamos ideias em produtos digitais escalaveis, combinando
              desenvolvimento, automacao e design para acelerar o crescimento do
              seu negocio.
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
                <p className="text-uppercase small mb-2">
                  Visao rapida
                </p>
                <h2 className="h4 text-uppercase mb-4">
                  Operacao, automacao e produto em uma mesma mesa.
                </h2>
                <ul className="list-unstyled mb-4 small">
                  <li className="mb-2">• Planejamento tecnico e visual</li>
                  <li className="mb-2">
                    • Execucao enxuta com ciclos semanais
                  </li>
                  <li className="mb-2">• Squad flexivel e orientado a dados</li>
                  <li className="mb-0">
                    • Contratos e propostas dentro da plataforma
                  </li>
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
