"use client";

import { Code2, Bot, Link2, PenTool } from "lucide-react";
import { Card, Col, Container, Row } from "react-bootstrap";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Produtos digitais criados do zero com arquitetura escalável e foco em manutenção simples.",
    Icon: Code2,
  },
  {
    title: "Automacao e Bots",
    description:
      "Fluxos automatizados, robôs operacionais e integrações que reduzem trabalho manual.",
    Icon: Bot,
  },
  {
    title: "Integracoes e APIs",
    description:
      "Conecte ERPs, CRMs e ferramentas proprietárias com pipelines seguros e observáveis.",
    Icon: Link2,
  },
  {
    title: "UX/UI Design",
    description:
      "Experiências visuais alinhadas ao negócio com processos colaborativos e iterativos.",
    Icon: PenTool,
  },
];

export function ServicesGrid() {
  return (
    <section className="codim-section codim-section-dark codim-services-grid">
      <Container>
        <Row className="mb-4 codim-reveal">
          <Col md={8}>
            <p className="codim-section-heading mb-2">Serviços</p>
            <h2 className="mb-3">O que a Codim entrega</h2>
            <p>
              Mais do que uma landing page: operação completa, de integrações a
              automações e experiência visual. Cada card pode evoluir para um
              módulo do seu produto.
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
