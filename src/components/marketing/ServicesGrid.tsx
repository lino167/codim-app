"use client";

import { Code2, Bot, Link2, PenTool } from "lucide-react";
import { Card, Col, Container, Row } from "react-bootstrap";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Produtos digitais criados do zero com arquitetura escalavel e foco em manutencao simples.",
    Icon: Code2,
  },
  {
    title: "Automacao e Bots",
    description:
      "Fluxos automatizados, robos operacionais e integracoes que reduzem trabalho manual.",
    Icon: Bot,
  },
  {
    title: "Integracoes e APIs",
    description:
      "Conecte ERPs, CRMs e ferramentas proprietarias com pipelines seguros e observaveis.",
    Icon: Link2,
  },
  {
    title: "UX/UI Design",
    description:
      "Experiencias visuais alinhadas ao negocio com processos colaborativos e iterativos.",
    Icon: PenTool,
  },
];

export function ServicesGrid() {
  return (
    <section className="codim-section codim-section-dark codim-services-grid">
      <Container>
        <Row className="mb-4 codim-reveal">
          <Col md={8}>
            <p className="codim-section-heading mb-2">Servicos</p>
            <h2 className="mb-3">O que a Codim entrega</h2>
            <p>
              Mais do que uma landing page: operacao completa, de integracoes a
              automacoes e experiencia visual. Cada card pode evoluir para um
              modulo do seu produto.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map(({ title, description, Icon }, index) => (
            <Col key={title} md={6}>
              <Card className="codim-service-card border-0 codim-reveal" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <Card.Body>
                  <div className="codim-service-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <Card.Title className="text-uppercase fw-semibold">
                    {title}
                  </Card.Title>
                  <Card.Text className="mb-0">
                    {description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
