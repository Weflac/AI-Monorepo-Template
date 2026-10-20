import axios from 'axios';

/**
 * 统一的后端 API 客户端。
 * 开发环境通过 vite proxy 将 /api 转发到 FastAPI (默认 http://127.0.0.1:8000)。
 */
export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api/v1',
  timeout: 15_000,
});

export interface HealthResponse {
  status: string;
  version: string;
}

export async function fetchHealth(): Promise<HealthResponse> {
  const { data } = await http.get<HealthResponse>('/health');
  return data;
}
