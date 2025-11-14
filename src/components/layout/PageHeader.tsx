"use client";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
};

export function PageHeader({ title, subtitle, kicker }: PageHeaderProps) {
  return (
    <header className="mb-4">
      {kicker && (
        <p className="text-uppercase text-danger fw-semibold mb-1 small">
          {kicker}
        </p>
      )}
      <h1 className="codim-page-title">{title}</h1>
      {subtitle && <p className="codim-page-subtitle">{subtitle}</p>}
    </header>
  );
}
