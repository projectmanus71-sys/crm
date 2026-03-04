import { pipeline } from "@/lib/mock-data";

const clients = [
  ["Ana Torres", "(11) 99888-1122", "ana@email.com", "Ativo"],
  ["Bruno Lima", "(21) 97777-4310", "bruno@email.com", "Follow-up"],
  ["Clínica Vida", "(31) 96666-8841", "contato@vida.com", "Proposta"]
];

export default function ClientesPage() {
  return (
    <section>
      <h1>Gestão de clientes (CRM)</h1>
      <p>Cadastro completo, histórico, filtros e funil de vendas em Kanban.</p>

      <h2 className="section-title">Pipeline</h2>
      <div className="grid">
        {pipeline.map((item) => (
          <article className="card" key={`${item.stage}-${item.name}`}>
            <div className="title">{item.stage}</div>
            <div className="value" style={{ fontSize: 18 }}>{item.name}</div>
            <div className="delta">{item.value}</div>
          </article>
        ))}
      </div>

      <h2 className="section-title">Clientes</h2>
      <article className="card">
        <table className="table">
          <thead>
            <tr><th>Nome</th><th>Telefone</th><th>Email</th><th>Status</th></tr>
          </thead>
          <tbody>
            {clients.map((row) => (
              <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
