// src/api.js
import axios from "axios";

// Ajusta si usas otra URL
const API_URL = "http://localhost:8000";

// 👉 instancia para TODAS las peticiones que requieren token
const api = axios.create({
  baseURL: `${API_URL}/api`,
});

// 👉 interceptor: antes de CADA request, mete el header Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---------- AUTH ----------
export async function login(username, password) {
  const response = await axios.post(`${API_URL}/api/token/`, {
    username,
    password,
  });
  return response.data; // { access, refresh }
}

// ---------- COMPRAS ----------
export async function getCompras() {
  const response = await api.get("/compras/"); // 🔴 ojo: con slash final
  return response.data;
}

export async function crearCompra(data) {
  const response = await api.post("/compras/", data); // 🔴 slash final
  return response.data;
}

export async function actualizarCompra(id, data) {
  const response = await api.put(`/compras/${id}/`, data); // 🔴 slash final
  return response.data;
}

export async function eliminarCompra(id) {
  await api.delete(`/compras/${id}/`); // 🔴 slash final
}

export async function cambiarEstadoCompra(id, estado) {
  const response = await api.patch(`/compras/${id}/estado/`, { estado }); // 🔴 slash final
  return response.data;
}
