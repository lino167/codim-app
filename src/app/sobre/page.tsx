"use client";

import { Row, Col, Card } from "react-bootstrap";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

export default function SobrePage() {
  return (
    <PageShell>
      <PageHeader
        kicker="Sobre a Codim"
        title="Quem esta por tras da Codim"
        subtitle="Uma startup tech focada em transformar operacoes reais em produtos digitais simples, eficientes e sustentaveis."
      />

      <Row className="gy-4">
        <Col md={7}>
          <p className="mb-3">
            A Codim nasce da combinacao entre chao de fabrica, visao de
            operacao e desenvolvimento de software. A ideia e simples: sair do
            basico e criar solucoes digitais que realmente conversam com a
            rotina de quem executa o trabalho todos os dias.
          </p>
          <p className="mb-3">
            Em vez de entregar apenas um sistema bonito, a Codim se preocupa em
            entender o processo, reduzir atritos e criar fluxos claros, com
            dados que ajudam a tomar decisao.
          </p>
          <p className="mb-0">
            Seja um painel interno, um bot de automacao ou um portal de
            atendimento ao cliente, o foco esta sempre em clareza, resultado e
            manutencao simples ao longo do tempo.
          </p>
        </Col>

        <Col md={5}>
          <Card className="codim-card bg-dark border-0">
            <Card.Body>
              <h2 className="h5 mb-3">Pilares da Codim</h2>
              <ul className="mb-0 small">
                <li className="mb-2">
                  <strong>Clareza:</strong> cada tela, fluxo e decisao e pensada
                  para ser facil de entender.
                </li>
                <li className="mb-2">
                  <strong>Eficiencia:</strong> automatizar o que e repetitivo e
                  deixar o time focar no que importa.
                </li>
                <li className="mb-2">
                  <strong>Parceria:</strong> construir junto, com comunicacao
                  direta e transparente.
                </li>
                <li className="mb-0">
                  <strong>Evolucao continua:</strong> projetos pensados para
                  crescer aos poucos, sem precisar recomecar do zero.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </PageShell>
  );
}
