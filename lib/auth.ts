import crypto from "node:crypto";
import { UserRole } from "./types";

export interface User {
  email: string;
  role: UserRole;
  name: string;
  passwordHash: string;
  salt: string;
}

const derive = (password: string, salt: string) =>
  crypto.scryptSync(password, salt, 64).toString("hex");

const sampleSalt = "crm-pro-salt";

export const users: User[] = [
  {
    email: "admin@crmpro.com",
    name: "Administrador",
    role: "ADMIN",
    salt: sampleSalt,
    passwordHash: derive("Admin@123", sampleSalt)
  },
  {
    email: "gerente@crmpro.com",
    name: "Gerente Comercial",
    role: "MANAGER",
    salt: sampleSalt,
    passwordHash: derive("Gerente@123", sampleSalt)
  }
];

export function authenticate(email: string, password: string) {
  const user = users.find((item) => item.email === email);
  if (!user) return null;

  const hash = derive(password, user.salt);
  if (hash !== user.passwordHash) return null;

  return { email: user.email, role: user.role, name: user.name };
}

export const rolePermissions: Record<UserRole, string[]> = {
  ADMIN: ["all"],
  MANAGER: ["dashboard", "clientes", "financeiro", "agenda", "relatorios"],
  EMPLOYEE: ["clientes", "agenda", "produtos"],
  VIEWER: ["dashboard", "relatorios"]
};
