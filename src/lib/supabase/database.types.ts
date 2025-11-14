export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          full_name: string | null;
          email: string;
          company_size: string | null;
          pain_point: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name?: string | null;
          email: string;
          company_size?: string | null;
          pain_point?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          email?: string;
          company_size?: string | null;
          pain_point?: string | null;
          created_at?: string;
        };
      };
    };
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
