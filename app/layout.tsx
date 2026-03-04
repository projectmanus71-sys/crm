import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  ["/", "Dashboard"],
  ["/clientes", "Clientes"],
  ["/financeiro", "Financeiro"],
  ["/funcionarios", "Funcionários"],
  ["/produtos", "Produtos/Serviços"],
  ["/agenda", "Agenda/Tarefas"],
  ["/configuracoes", "Configurações"],
  ["/login", "Login"]
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="layout">
          <aside className="sidebar">
            <div className="brand">CRM Pro • PME</div>
            {links.map(([href, label]) => (
              <Link className="navlink" href={href} key={href}>
                {label}
              </Link>
            ))}
          </aside>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
