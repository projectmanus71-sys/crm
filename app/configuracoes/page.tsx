export default function ConfigPage() {
  return (
    <section>
      <h1>Configurações</h1>
      <div className="grid">
        {[
          "Dados da empresa e logotipo",
          "Personalização de cores e tema",
          "Plano de metas mensais",
          "Backup automático",
          "Exportação de dados"
        ].map((item) => (
          <article className="card" key={item}>
            <div className="value" style={{ fontSize: 18 }}>{item}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
