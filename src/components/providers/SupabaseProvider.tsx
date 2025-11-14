"use client";

import { ReactNode, createContext, useContext, useMemo } from "react";
import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";

type Props = {
  children: ReactNode;
};

type SupabaseContextValue = {
  client: SupabaseClient<Database> | null;
  isConfigured: boolean;
};

const SupabaseContext = createContext<SupabaseContextValue | null>(null);

export function SupabaseProvider({ children }: Props) {
  const value = useMemo<SupabaseContextValue>(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !anonKey) {
      console.warn(
        "Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY para ativar o Supabase.",
      );
      return {
        client: null,
        isConfigured: false,
      };
    }

    return {
      client: createBrowserClient<Database>(url, anonKey),
      isConfigured: true,
    };
  }, []);

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);

  if (!context) {
    throw new Error(
      "useSupabase precisa estar dentro do SupabaseProvider.",
    );
  }

  return context;
}
