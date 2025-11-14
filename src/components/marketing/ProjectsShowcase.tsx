"use client";

import { Card, Col, Container, Row } from "react-bootstrap";

const projects = [
  {
    title: "Atlas Ops",
    stack: ["Next.js", "Supabase", "Stripe"],
    description: "Portal completo para squads de operação criarem rotinas e fluxos.",
  },
  {
    title: "Pulse CRM",
    stack: ["React", "Node", "Postgres"],
    description: "CRM enxuto com automações e playbooks dinâmicos para vendas B2B.",
  },
  {
    title: "Neon Dash",
    stack: ["Next.js", "Python", "Supabase"],
    description: "Dashboard de monitoramento com dados em tempo real e alertas.",
  },
  {
    title: "Cortex API",
    stack: ["Node", "GraphQL", "Redis"],
    description: "Camada de APIs para orquestrar integrações entre ERPs e SaaS.",
  },
  {
    title: "Nova AI Ops",
    stack: ["React", "Python", "Supabase"],
    description: "Console para modelos de IA com automação de tarefas repetitivas.",
  },
  {
    title: "Orbit Desk",
    stack: ["Next.js", "Supabase", "LangChain"],
    description: "Help desk proativo com bots que analisam o contexto do cliente.",
  },
];

export function ProjectsShowcase() {
  return (
    <section className="codim-section codim-section-dark">
      <Container>
        <Row className="codim-reveal mb-4">
          <Col lg={8}>
            <p className="codim-section-heading mb-2">Projetos recentes</p>
            <h2 className="codim-page-title">Produtos e plataformas</h2>
            <p>
              De portais operacionais a integrações críticas, cada entrega da
              Codim nasce com o lema Código com propósito.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.title}>
              <Card className="codim-project-card codim-reveal">
                <div className="codim-project-media" />
                <Card.Body>
                  <h3 className="h5 text-uppercase">{project.title}</h3>
                  <div className="d-flex flex-wrap gap-2 codim-project-meta mb-3">
                    {project.stack.map((item) => (
                      <span key={item} className="codim-filter-pill active">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mb-0">{project.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
