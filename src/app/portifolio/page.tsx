"use client";

import { useMemo, useState } from "react";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

type Project = {
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Atlas Ops",
    problem: "Squads sem visão consolidada dos fluxos diários.",
    solution:
      "Plataforma modular com dashboards, rotinas automatizadas e alertas.",
    stack: ["Next.js", "Supabase", "Stripe"],
    technologies: ["React", "Node"],
  },
  {
    title: "Pulse CRM",
    problem: "Pipeline B2B descentralizado e com retrabalho.",
    solution:
      "CRM minimalista com integração a bots e playbooks versionados.",
    stack: ["React", "Node", "Postgres"],
    technologies: ["React", "Node"],
  },
  {
    title: "Neon Dash",
    problem: "Indicadores dispersos entre planilhas e scripts.",
    solution:
      "Dashboard em tempo real com jobs em Python e notificações inteligentes.",
    stack: ["Next.js", "Python", "Supabase"],
    technologies: ["Python", "React"],
  },
  {
    title: "Cortex API",
    problem: "Integrações entre ERPs e SaaS com atrasos e falhas.",
    solution:
      "Gateway GraphQL com filas resilientes e observabilidade completa.",
    stack: ["Node", "GraphQL", "Redis"],
    technologies: ["Node"],
  },
  {
    title: "Nova AI Ops",
    problem: "Bots isolados sem camada de orquestração central.",
    solution:
      "Console único com prompt library, agendador e auditoria de automações.",
    stack: ["React", "Python", "Supabase"],
    technologies: ["React", "Python"],
  },
  {
    title: "Orbit Desk",
    problem: "Atendimento suportado manualmente e sem contexto.",
    solution:
      "Help desk proativo com roteador inteligente e integrações ao CRM.",
    stack: ["Next.js", "Supabase", "LangChain"],
    technologies: ["React"],
  },
];

const filters = ["Todos", "React", "Node", "Python"];

export default function PortifolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return projects;
    return projects.filter((project) =>
      project.technologies.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <PageShell>
      <PageHeader
        kicker="Projetos"
        title="Produtos digitais com propósito"
        subtitle="Cases selecionados de SaaS, automações e plataformas internas desenvolvidas pela Codim."
      />

      <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`codim-filter-pill ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </Stack>

      <Row className="g-4">
        {filteredProjects.map((project) => (
          <Col md={6} key={project.title}>
            <Card className="codim-project-card h-100">
              <div className="codim-project-media" />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h5 text-uppercase mb-0">{project.title}</h3>
                  <span className="codim-filter-pill active">
                    {project.stack[0]}
                  </span>
                </div>
                <p className="mb-1 text-uppercase small">Problema</p>
                <p>{project.problem}</p>
                <p className="mb-1 text-uppercase small">Solução</p>
                <p>{project.solution}</p>
                <p className="mb-1 text-uppercase small">Stack</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="codim-filter-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  bsPrefix="codim-btn"
                  className="codim-btn-secondary w-100"
                >
                  Ver estudo completo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </PageShell>
  );
}
