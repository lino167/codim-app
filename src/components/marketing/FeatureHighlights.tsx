"use client";

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, ListGroup, Spinner } from "react-bootstrap";

type Highlight = {
  id: string;
  title: string;
  description: string;
  status: "Disponível" | "Beta" | "Roadmap";
};

const highlights: Highlight[] = [
  {
    id: "ops-hub",
    title: "Hub operacional",
    description:
      "Modelos em Supabase para leads, squads e rotinas conectados com TanStack Query.",
    status: "Disponível",
  },
  {
    id: "playbooks",
    title: "Playbooks inteligentes",
    description:
      "Automatize fluxos com React Hook Form + Zod e salve versões direto no storage.",
    status: "Beta",
  },
  {
    id: "insights",
    title: "Insights em tempo real",
    description:
      "Dashboards com animações do Framer Motion para acompanhar métricas críticas.",
    status: "Roadmap",
  },
];

async function fetchHighlights() {
  // Simula uma chamada assíncrona que poderia ir ao Supabase.
  await new Promise((resolve) => setTimeout(resolve, 400));
  return highlights;
}

export function FeatureHighlights() {
  const { data, isLoading } = useQuery({
    queryKey: ["feature-highlights"],
    queryFn: fetchHighlights,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <Card className="h-100 glass-card border-0">
      <Card.Body>
        <Card.Title className="text-gradient mb-2">
          Roadmap público
        </Card.Title>
        <Card.Text className="text-muted">
          Todos os cards abaixo podem ser mapeados direto para tabelas
          do Supabase para você adaptar ao seu produto.
        </Card.Text>
        {isLoading && (
          <div className="d-flex align-items-center gap-3 mt-4">
            <Spinner animation="border" size="sm" />
            <span>Carregando destaques...</span>
          </div>
        )}
        {!isLoading && (
          <ListGroup variant="flush" className="mt-3">
            {data?.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="list-group-item bg-transparent border-0 px-0 py-3"
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                  <span className="badge rounded-pill badge-soft text-nowrap ms-3">
                    {item.status}
                  </span>
                </div>
              </motion.li>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}
