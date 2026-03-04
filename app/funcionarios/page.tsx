const employees = [
  ["Maria Silva", "Gerente", "R$ 7.500", "R$ 2.100", "94%"],
  ["João Costa", "Vendedor", "R$ 3.200", "R$ 1.300", "88%"],
  ["Lívia Souza", "Atendimento", "R$ 2.900", "R$ 450", "91%"]
];

export default function FuncionariosPage() {
  return (
    <section>
      <h1>Gestão de funcionários</h1>
      <p>Controle de metas, desempenho, atividades e ranking de produtividade.</p>
      <article className="card">
        <table className="table">
          <thead><tr><th>Nome</th><th>Cargo</th><th>Salário</th><th>Comissão</th><th>Desempenho</th></tr></thead>
          <tbody>{employees.map((e) => <tr key={e[0]}>{e.map((c) => <td key={c}>{c}</td>)}</tr>)}</tbody>
        </table>
      </article>
    </section>
  );
}
