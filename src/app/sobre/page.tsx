"use client";

import { Rocket, ShieldCheck, Handshake, Target, Activity } from "lucide-react";
import { Row, Col, Card, Stack } from "react-bootstrap";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

const values = [
  {
    title: "Clareza",
    description: "Documentacao viva, funis visiveis e tomada de decisao guiada por dados.",
    Icon: Target,
  },
  {
    title: "Compromisso",
    description: "Entregamos o que prometemos com ciclos curtos e transparencia total.",
    Icon: ShieldCheck,
  },
  {
    title: "Parceria",
    description: "Construimos junto, com comunicacao direta e sem camadas desnecessarias.",
    Icon: Handshake,
  },
  {
    title: "Evolucao",
    description: "Produtos pensados para iteracao continua sem reescrever tudo do zero.",
    Icon: Activity,
  },
];

const timeline = [
  {
    year: "2018",
    description: "Zacarias inicia consultorias independentes e mapeia gargalos de squads.",
  },
  {
    year: "2020",
    description: "Nasce a Codim com foco em sistemas sob medida e automacoes industriais.",
  },
  {
    year: "2022",
    description: "Stack passa a incluir Supabase, Next.js e camadas de IA operacional.",
  },
  {
    year: "2024",
    description: "Codim assume posicionamento de tech studio e amplia atuacao em SaaS.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageShell>
        <PageHeader
          kicker="Sobre a Codim"
          title="Codigo com proposito"
          subtitle="Tech studio liderado por Zacarias Lino Ramos Filho para construir produtos digitais que respeitam a realidade operacional das empresas."
        />
        <Row className="gy-4">
          <Col lg={6}>
            <Card className="codim-card p-4 h-100">
              <h3 className="h5 text-uppercase mb-3">Missao</h3>
              <p>
                Simplificar operacoes complexas com software sob medida, favorecendo
                processos claros, independencia das equipes e dados que geram confianca.
              </p>
              <h3 className="h5 text-uppercase mt-4 mb-3">Historia</h3>
              <p>
                A Codim surgiu quando Zacarias percebeu que muitas empresas tinham
                excelentes talentos, mas ferramentas genericas. O estúdio nasceu para
                desenhar fluxos e produtos que acompanham as pessoas na pratica.
              </p>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="codim-card p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="codim-service-icon m-0">
                  <Rocket size={20} />
                </div>
                <div>
                  <h3 className="h5 mb-1 text-uppercase">
                    Quem eh Zacarias Lino Ramos Filho
                  </h3>
                  <p className="mb-0">
                    Builder, arquiteto de software e mentor de squads orientados a produto.
                  </p>
                </div>
              </div>
              <p>
                Ja liderou times em SaaS, industria e logistica. Hoje, opera a Codim para
                integrar tech, automacao e estrategia em um mesmo lugar.
              </p>
              <div>
                <p className="text-uppercase small mb-2">Linha do tempo</p>
                <div className="codim-timeline">
                  {timeline.map((item) => (
                    <div key={item.year} className="codim-timeline-item">
                      <strong>{item.year}</strong>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </PageShell>

      <PageShell>
        <PageHeader
          kicker="Valores essenciais"
          title="Como trabalhamos"
          subtitle="Cada projeto segue o mesmo principio: tecnologia a serviço da operacao, com transparencia, velocidade e foco nos resultados."
        />
        <Row className="g-4">
          {values.map(({ title, description, Icon }) => (
            <Col md={6} key={title}>
              <Card className="codim-card h-100 p-4">
                <Stack direction="horizontal" gap={3} className="mb-3">
                  <div className="codim-service-icon m-0">
                    <Icon size={20} />
                  </div>
                  <h3 className="h6 text-uppercase mb-0">{title}</h3>
                </Stack>
                <p className="mb-0">{description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </PageShell>
    </>
  );
}
