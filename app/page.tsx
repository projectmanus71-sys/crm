import { alerts, kpis, monthlyGrowth, strategicMetrics } from "@/lib/mock-data";

export default function Home() {
  return (
    <section>
      <h1>Dashboard principal</h1>
      <p>ERP + CRM simplificado para gestão completa de pequenos negócios.</p>

      <div className="grid">
        {kpis.map((kpi) => (
          <article className="card" key={kpi.label}>
            <div className="title">{kpi.label}</div>
            <div className="value">{kpi.value}</div>
            <div className="delta">{kpi.delta}</div>
          </article>
        ))}
      </div>

      <div className="row">
        <article className="card">
          <h3 style={{ marginTop: 0 }}>Crescimento mensal</h3>
          <div className="barWrap">
            {monthlyGrowth.map((point, index) => (
              <div className="bar" key={index} style={{ height: `${point}%` }} title={`${point}`} />
            ))}
          </div>
        </article>

        <article className="card">
          <h3 style={{ marginTop: 0 }}>KPI estratégicos</h3>
          <ul className="list">
            {strategicMetrics.map((metric) => (
              <li key={metric.label}>
                {metric.label}: <strong>{metric.value}</strong>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="card" style={{ marginTop: 14 }}>
        <h3 style={{ marginTop: 0 }}>Alertas inteligentes</h3>
        <ul className="list">
          {alerts.map((alert) => (
            <li key={alert}>{alert}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
