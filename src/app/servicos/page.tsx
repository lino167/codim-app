"use client";

import { Card, Col, Row } from "react-bootstrap";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

const services = [
  {
    title: "Desenvolvimento Web Sob Medida",
    description:
      "Aplicações full stack com App Router, Supabase, automações e observabilidade.",
    duration: "6-12 semanas",
    stack: ["Next.js", "Supabase", "Node"],
  },
  {
    title: "Automação e Bots Operacionais",
    description:
      "Fluxos com workers, integrações a APIs e processos que eliminam retrabalho manual.",
    duration: "4-8 semanas",
    stack: ["Python", "Node", "Supabase"],
  },
  {
    title: "Integrações e APIs",
    description:
      "Camadas de APIs com autenticação, monitoramento e pipelines de dados entre ERPs e SaaS.",
    duration: "5-10 semanas",
    stack: ["Node", "GraphQL", "Postgres"],
  },
  {
    title: "UX/UI Design Operacional",
    description:
      "Design systems minimalistas, protótipos navegáveis e guias de implementação.",
    duration: "2-5 semanas",
    stack: ["Figma", "Inter", "Orbitron"],
  },
];

export default function ServicosPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="Serviços"
        title="Como a Codim entrega"
        subtitle="Cada parceria possui briefing guiado, rota de execução e acompanhamento semanal."
      />
      <Row className="g-4">
        {services.map((service) => (
          <Col md={6} key={service.title}>
            <Card className="codim-card h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="h5 text-uppercase mb-0">{service.title}</h3>
                <span className="codim-filter-pill">{service.duration}</span>
              </div>
              <p>{service.description}</p>
              <p className="text-uppercase small mb-1">Tecnologias</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {service.stack.map((tech) => (
                  <span key={tech} className="codim-filter-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <button type="button" className="codim-btn-primary codim-btn w-100">
                Briefing rápido
              </button>
            </Card>
          </Col>
        ))}
      </Row>
    </PageShell>
  );
}
