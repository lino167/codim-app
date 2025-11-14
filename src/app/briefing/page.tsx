import { Container } from "react-bootstrap";

export default function BriefingPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-3">Briefing</h1>
      <p className="lead">
        Formulário guiado para que novos clientes compartilhem contexto,
        objetivos e requisitos do projeto. Futuramente integrará React Hook Form
        + Zod e salvará no Supabase.
      </p>
    </Container>
  );
}
