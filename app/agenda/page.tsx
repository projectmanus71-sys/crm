const tasks = [
  ["Follow-up com Cliente Atlas", "Hoje 15:00", "Ana (Gerente)", "Alta"],
  ["Fechamento de caixa semanal", "Amanhã 09:00", "João", "Média"],
  ["Revisar metas do mês", "Sex 10:30", "Admin", "Alta"]
];

export default function AgendaPage() {
  return (
    <section>
      <h1>Agenda e tarefas</h1>
      <p>Agenda integrada, lembretes automáticos e tarefas por usuário.</p>
      <article className="card">
        <table className="table">
          <thead><tr><th>Tarefa</th><th>Prazo</th><th>Responsável</th><th>Prioridade</th></tr></thead>
          <tbody>{tasks.map((t) => <tr key={t[0]}>{t.map((c) => <td key={c}>{c}</td>)}</tr>)}</tbody>
        </table>
      </article>
    </section>
  );
}
