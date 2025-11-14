"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Alert,
  Button,
  Form,
  Stack,
} from "react-bootstrap";
import { useSupabase } from "@/components/providers/SupabaseProvider";

const waitlistSchema = z.object({
  fullName: z
    .string()
    .min(3, "Informe pelo menos 3 caracteres.")
    .max(80, "Nome muito longo."),
  email: z.string().email("E-mail inválido."),
  companySize: z.enum(["1-10", "11-50", "51-200", "+200"], {
    required_error: "Selecione o porte da empresa.",
  }),
  painPoint: z
    .string()
    .min(10, "Compartilhe um pouco mais sobre o desafio.")
    .max(280, "Limite de 280 caracteres."),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const { client: supabase, isConfigured } = useSupabase();
  const [successEmail, setSuccessEmail] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companySize: "1-10",
      painPoint: "",
    },
  });

  const waitlistMutation = useMutation({
    mutationKey: ["waitlist"],
    mutationFn: async (values: WaitlistFormValues) => {
      if (!supabase) {
        throw new Error(
          "Supabase não configurado. Defina as variáveis de ambiente para enviar o formulário.",
        );
      }

      const { error } = await supabase.from("leads").insert({
        full_name: values.fullName,
        email: values.email,
        company_size: values.companySize,
        pain_point: values.painPoint,
      });

      if (error) {
        throw new Error(error.message);
      }

      return values.email;
    },
    onSuccess: (email) => {
      setSuccessEmail(email);
      reset();
    },
  });

  function onSubmit(values: WaitlistFormValues) {
    setSuccessEmail(null);
    waitlistMutation.mutate(values);
  }

  if (!isConfigured) {
    return (
      <Alert variant="warning" className="mb-0">
        Configure o Supabase definindo <code>NEXT_PUBLIC_SUPABASE_URL</code> e{" "}
        <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> no arquivo <code>.env.local</code>{" "}
        para habilitar este formulário.
      </Alert>
    );
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} id="lista-espera">
      <Stack gap={3}>
        <Form.Group controlId="fullName">
          <Form.Label>Nome completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Ana Martins"
            isInvalid={Boolean(errors.fullName)}
            {...register("fullName")}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>E-mail de trabalho</Form.Label>
          <Form.Control
            type="email"
            placeholder="voce@startup.com"
            isInvalid={Boolean(errors.email)}
            {...register("email")}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="companySize">
          <Form.Label>Tamanho da equipe</Form.Label>
          <Form.Select
            isInvalid={Boolean(errors.companySize)}
            {...register("companySize")}
          >
            <option value="1-10">1-10 pessoas</option>
            <option value="11-50">11-50 pessoas</option>
            <option value="51-200">51-200 pessoas</option>
            <option value="+200">Mais de 200 pessoas</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.companySize?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="painPoint">
          <Form.Label>Maior gargalo operacional hoje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Conte como você orquestra dados, squads e rotinas hoje."
            isInvalid={Boolean(errors.painPoint)}
            {...register("painPoint")}
          />
          <Form.Control.Feedback type="invalid">
            {errors.painPoint?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="btn-gradient w-100 py-2"
          disabled={waitlistMutation.isPending}
        >
          {waitlistMutation.isPending
            ? "Enviando..."
            : "Entrar para a lista de espera"}
        </Button>

        {successEmail && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Alert variant="success" className="mb-0">
              Recebemos seu interesse ({successEmail}). Em breve enviaremos o
              passo a passo no seu e-mail.
            </Alert>
          </motion.div>
        )}

        {waitlistMutation.isError && (
          <Alert variant="danger" className="mb-0">
            {waitlistMutation.error?.message ||
              "Não foi possível registrar agora. Tente novamente em instantes."}
          </Alert>
        )}
      </Stack>
    </Form>
  );
}
