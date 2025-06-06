import axios from "axios";

const API_BASE = "http://localhost:8080/api";
export const api = axios.create({ baseURL: API_BASE });

export const cadastrarPropriedade = (data) => api.post("/propriedades", data);
export const cadastrarCultura = (data) => api.post("/culturas", data);
export const cadastrarTipoProblema = (data) => api.post("/problemas", data);

export const registrarOcorrencia = (data) => api.post("/ocorrencias", data);
export const listarOcorrencias = () => api.get("/ocorrencias");
