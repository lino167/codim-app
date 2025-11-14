"use client";

import { Cpu, Zap, Target } from "lucide-react";
import { Col, Container, Row } from "react-bootstrap";

const pillars = [
  {
    title: "Velocidade",
    description:
      "Operamos em ciclos curtos para entregar as primeiras telas e automações em dias, não semanas.",
    Icon: Zap,
  },
  {
    title: "Precisão",
    description:
      "Arquiteturas claras, stack opinativa e rastreabilidade de cada decisão técnica.",
    Icon: Target,
  },
  {
    title: "Automação",
    description:
      "Bots e integrações que eliminam tarefas manuais enquanto preservam contexto operacional.",
    Icon: Cpu,
  },
];

export function AboutSection() {
  return (
    <section className="codim-section codim-section-dark">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6} className="codim-reveal">
            <p className="codim-section-heading mb-2">Sobre a Codim</p>
            <h2 className="codim-page-title">Missão e propósito</h2>
            <p className="codim-page-subtitle">
              Somos um tech studio que une desenvolvimento sob medida e
              automações para tirar ideias do papel com clareza, foco e
              mensuração constante.
            </p>
            <p>
              Cada projeto recebe uma estrutura modular: discovery rápido,
              arquitetura codificada e rota de evolução contínua. Nenhum
              entregável é genérico; tudo é pensado para o processo real do
              cliente.
            </p>
          </Col>
          <Col lg={6}>
            <Row className="g-4">
              {pillars.map(({ title, description, Icon }) => (
                <Col xs={12} key={title} className="codim-reveal">
                  <div className="codim-card p-4 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="codim-service-icon m-0">
                        <Icon size={20} />
                      </div>
                      <h3 className="h5 text-uppercase mb-0">{title}</h3>
                    </div>
                    <p className="mb-0">{description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
