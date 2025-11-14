"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Badge,
  Button,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";

export function Hero() {
  return (
    <section className="hero-section py-5">
      <Container className="py-lg-5 position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge pill className="badge-soft mb-3 px-3 py-2">
                Beta fechado • Operações unificadas
              </Badge>
              <h1 className="display-4 fw-semibold mb-3 text-gradient">
                Codim conecta dados, squads e automações em um só lugar.
              </h1>
              <p className="lead text-white-50 mb-4">
                Estruture seu CRM operacional em minutos usando Next.js,
                Supabase e o ecossistema React. Auth, banco e storage já
                vêm preparados para você experimentar.
              </p>
              <Stack direction="horizontal" gap={3} className="flex-wrap">
                <Button
                  as={Link}
                  href="#lista-espera"
                  size="lg"
                  className="btn-gradient px-4"
                >
                  Quero testar o Codim
                </Button>
                <Button
                  as={Link}
                  href="https://supabase.com/docs"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline-light"
                  size="lg"
                >
                  Ver arquitetura
                </Button>
              </Stack>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-4"
            >
              <p className="text-uppercase mb-1 small">
                Radar operacional
              </p>
              <h3 className="text-white">
                Tudo o que sua squad precisa monitorar
              </h3>
              <Row className="mt-4">
                <Col xs={6} className="mb-4">
                  <p className="metric-value mb-0">92%</p>
                  <p className="metric-label mb-0">Playbooks ativos</p>
                </Col>
                <Col xs={6} className="mb-4">
                  <p className="metric-value mb-0">12k</p>
                  <p className="metric-label mb-0">Eventos/dia</p>
                </Col>
                <Col xs={6}>
                  <p className="metric-value mb-0">37</p>
                  <p className="metric-label mb-0">Rotinas monitoradas</p>
                </Col>
                <Col xs={6}>
                  <p className="metric-value mb-0">4 min</p>
                  <p className="metric-label mb-0">MTTR do squad</p>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
