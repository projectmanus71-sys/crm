const payables = [
  ["Fornecedor Alpha", "Impostos", "12/07/2026", "Pendente", "PIX"],
  ["Energia", "Despesa fixa", "10/07/2026", "Pago", "Débito"],
  ["Campanha Ads", "Investimentos", "08/07/2026", "Atrasado", "Cartão"]
];

const receivables = [
  ["Clínica Vita", "R$ 5.400", "15/07/2026", "Pendente", "3x"],
  ["Studio Forma", "R$ 2.700", "20/07/2026", "Pago", "1x"]
];

export default function FinanceiroPage() {
  return (
    <section>
      <h1>Módulo financeiro completo</h1>
      <p>Contas a pagar/receber, fluxo de caixa e relatórios exportáveis em PDF/Excel.</p>

      <h2 className="section-title">Contas a pagar</h2>
      <article className="card">
        <table className="table"><thead><tr><th>Fornecedor</th><th>Categoria</th><th>Venc.</th><th>Status</th><th>Pagamento</th></tr></thead>
          <tbody>{payables.map((r) => <tr key={r[0]}>{r.map((c) => <td key={c}>{c}</td>)}</tr>)}</tbody>
        </table>
      </article>

      <h2 className="section-title">Contas a receber</h2>
      <article className="card">
        <table className="table"><thead><tr><th>Cliente</th><th>Valor</th><th>Venc.</th><th>Status</th><th>Parcelamento</th></tr></thead>
          <tbody>{receivables.map((r) => <tr key={r[0]}>{r.map((c) => <td key={c}>{c}</td>)}</tr>)}</tbody>
        </table>
      </article>
    </section>
  );
}
