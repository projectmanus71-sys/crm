const products = [
  ["Plano CRM Essencial", "R$ 299", "R$ 80", "73%", "-"],
  ["Consultoria de Vendas", "R$ 1.200", "R$ 350", "70%", "-"],
  ["Kit Papelaria", "R$ 49", "R$ 22", "55%", "14 un."]
];

export default function ProdutosPage() {
  return (
    <section>
      <h1>Gestão de produtos e serviços</h1>
      <p>Cadastro de preço, custo, margem e alertas de estoque baixo (opcional).</p>
      <article className="card">
        <table className="table">
          <thead><tr><th>Item</th><th>Preço</th><th>Custo</th><th>Margem</th><th>Estoque</th></tr></thead>
          <tbody>{products.map((p) => <tr key={p[0]}>{p.map((c) => <td key={c}>{c}</td>)}</tr>)}</tbody>
        </table>
      </article>
    </section>
  );
}
