// src/LoginPage.jsx
import { useState } from "react";
import { login } from "./api";
import { navigateToUrl } from "single-spa";


export default function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(username, password);
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      navigateToUrl("/inventario");
      onLoginSuccess();
    } catch (err) {
      console.error(err);
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Usuario</label>
          <input
            style={{ width: "100%" }}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Contraseña</label>
          <input
            style={{ width: "100%" }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
