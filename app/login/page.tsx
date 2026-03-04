"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    setStatus(response.ok ? "Login realizado com sucesso." : "Falha no login.");
  }

  return (
    <section style={{ maxWidth: 420 }}>
      <h1>Login seguro</h1>
      <p>Acesso por email/senha, papéis e recuperação de senha.</p>
      <form className="card" onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" required style={{ width: "100%", marginBottom: 12 }} />
        <label>Senha</label>
        <input name="password" type="password" required style={{ width: "100%", marginBottom: 12 }} />
        <button type="submit">Entrar</button>
      </form>
      <p>{status}</p>
    </section>
  );
}
