import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Hero } from "@/components/marketing/Hero";
import { FeatureHighlights } from "@/components/marketing/FeatureHighlights";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

const stackItems = [
  { title: "Next.js 16 + App Router", description: "Rotas server-first, Server Actions e otimizações prontas." },
  { title: "Bootstrap 5 + React-Bootstrap", description: "Design system rápido sem dependência do Tailwind." },
  { title: "Supabase", description: "Auth, banco Postgres, storage e Edge Functions em um único provedor." },
  { title: "TanStack Query", description: "Cache inteligente para buscar e mutar dados da plataforma." },
  { title: "React Hook Form + Zod", description: "Formulários tipados com validação resiliente." },
  { title: "Framer Motion", description: "Transições modernas para dashboards e onboarding." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <main className="py-5">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={6}>
              <FeatureHighlights />
            </Col>
            <Col lg={6}>
              <Card className="h-100 glass-card border-0">
                <Card.Body>
                  <Card.Title className="text-gradient">
                    Stack opinativa pronta
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Tudo instalado e configurado para você só pensar no seu
                    produto.
                  </Card.Text>
                  <ListGroup variant="flush" className="mt-3">
                    {stackItems.map((item) => (
                      <ListGroup.Item
                        key={item.title}
                        className="bg-transparent px-0"
                      >
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="text-muted mb-0">{item.description}</p>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <section className="py-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Card className="glass-card border-0">
                  <Card.Body>
                    <div className="mb-4 text-center">
                      <p className="text-uppercase text-muted mb-1 small">
                        Beta privado
                      </p>
                      <h2 className="section-title">
                        Entre para a lista de espera
                      </h2>
                      <p className="text-muted mb-0">
                        Sua inscrição é salva no Supabase com validação feita
                        via React Hook Form, Zod e TanStack Query.
                      </p>
                    </div>
                    <WaitlistForm />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
