"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar, Container, Nav } from "react-bootstrap";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/portifolio", label: "Portfólio" },
  { href: "/certificados", label: "Certificados" },
  { href: "/servicos", label: "Serviços" },
  { href: "/briefing", label: "Briefing" },
  { href: "/contato", label: "Contato" },
];

export function CodimNavbar() {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" sticky="top" className="codim-navbar">
      <Container fluid="lg">
        <Navbar.Brand as={Link} href="/">
          Codim
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="codim-navbar" />

        <Navbar.Collapse id="codim-navbar">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.href}
                as={Link}
                href={item.href}
                className={`codim-nav-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
