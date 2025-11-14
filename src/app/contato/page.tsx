"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Row } from "react-bootstrap";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

const briefingSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  company: z.string().min(2),
  projectType: z.string().min(2),
  timeframe: z.string(),
  stack: z.string().optional(),
  description: z.string().min(20),
});

type BriefingValues = z.infer<typeof briefingSchema>;

const steps = [
  {
    title: "Quem você é",
    fields: ["fullName", "email", "company"] as const,
  },
  {
    title: "Escopo e tempo",
    fields: ["projectType", "timeframe", "stack"] as const,
  },
  {
    title: "Contexto",
    fields: ["description"] as const,
  },
];

export default function ContatoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState<BriefingValues | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm<BriefingValues>({
    resolver: zodResolver(briefingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      projectType: "",
      timeframe: "",
      stack: "",
      description: "",
    },
  });

  async function nextStep() {
    const fields = steps[currentStep].fields;
    const valid = await trigger(fields);
    if (valid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  }

  function prevStep() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  const onSubmit = (values: BriefingValues) => {
    setSubmitted(values);
    reset();
    setCurrentStep(0);
  };

  return (
    <PageShell>
      <PageHeader
        kicker="Briefing"
        title="Contato direto com a Codim"
        subtitle="Multi-step simples para entender seu projeto. Respondemos em até 24h com os próximos passos."
      />

      <Form onSubmit={handleSubmit(onSubmit)} className="codim-form-step">
        {currentStep === 0 && (
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="fullName">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control
                  className="codim-input"
                  isInvalid={Boolean(errors.fullName)}
                  placeholder="Seu nome"
                  {...register("fullName")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  className="codim-input"
                  type="email"
                  placeholder="voce@empresa.com"
                  isInvalid={Boolean(errors.email)}
                  {...register("email")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="company">
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  className="codim-input"
                  placeholder="Nome da empresa"
                  isInvalid={Boolean(errors.company)}
                  {...register("company")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.company?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        )}

        {currentStep === 1 && (
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="projectType">
                <Form.Label>Tipo de projeto</Form.Label>
                <Form.Control
                  className="codim-input"
                  placeholder="SaaS, painel, automação..."
                  isInvalid={Boolean(errors.projectType)}
                  {...register("projectType")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.projectType?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="timeframe">
                <Form.Label>Prazo desejado</Form.Label>
                <Form.Control
                  className="codim-input"
                  placeholder="Ex: 8 semanas"
                  isInvalid={Boolean(errors.timeframe)}
                  {...register("timeframe")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.timeframe?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="stack">
                <Form.Label>Stack preferida (opcional)</Form.Label>
                <Form.Control
                  className="codim-input"
                  placeholder="Next.js, Supabase..."
                  {...register("stack")}
                />
              </Form.Group>
            </Col>
          </Row>
        )}

        {currentStep === 2 && (
          <Form.Group controlId="description">
            <Form.Label>Conte mais sobre o desafio</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              className="codim-input"
              placeholder="Quais dores você quer resolver? Quais sistemas se conectam?"
              isInvalid={Boolean(errors.description)}
              {...register("description")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description?.message}
            </Form.Control.Feedback>
          </Form.Group>
        )}

        <div className="d-flex flex-wrap gap-3 mt-4">
          {currentStep > 0 && (
            <Button
              type="button"
              bsPrefix="codim-btn"
              className="codim-btn-secondary"
              onClick={prevStep}
            >
              Voltar
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button
              type="button"
              bsPrefix="codim-btn"
              className="codim-btn-primary"
              onClick={nextStep}
            >
              Próximo
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button
              type="submit"
              bsPrefix="codim-btn"
              className="codim-btn-primary codim-cta-pulse"
            >
              Enviar briefing
            </Button>
          )}
        </div>

        {submitted && (
          <div className="codim-alert codim-alert-success mt-4">
            Recebemos o briefing de {submitted.fullName}. Responderemos em até
            24h no e-mail {submitted.email}.
          </div>
        )}
      </Form>
    </PageShell>
  );
}
