import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import type { ApiErrorResponse } from "../Types/globalTypes";

// Extend Axios config for retry flag
interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Environment
const BASE_URL = import.meta.env.VITE_BASE_URL;

if (!BASE_URL) {
  throw new Error("VITE_BASE_URL is not defined");
}

// Axios Instance
const app: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Request Interceptor
app.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

// Response Interceptor
app.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError<ApiErrorResponse>): Promise<AxiosResponse> => {
    const originalConfig = error.config as RetryAxiosRequestConfig;

    if (
      error.response?.status === 401 &&
      originalConfig &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;

      await axios.get<void>(`${BASE_URL}/user/refresh-token`, {
        withCredentials: true,
      });

      return app(originalConfig);
    }

    const message = error.response?.data?.message ?? "خطای ارتباط با سرور";

    return Promise.reject(new Error(message));
  },
);

// Typed HTTP Client
interface HttpClient {
  get<TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>>;

  post<TResponse, TBody>(
    url: string,
    data?: TBody,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>>;

  put<TResponse, TBody>(
    url: string,
    data?: TBody,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>>;

  patch<TResponse, TBody>(
    url: string,
    data?: TBody,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>>;

  delete<TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>>;
}

// Exported instance
const http: HttpClient = {
  get: (url, config) => app.get(url, config),
  post: (url, data, config) => app.post(url, data, config),
  put: (url, data, config) => app.put(url, data, config),
  patch: (url, data, config) => app.patch(url, data, config),
  delete: (url, config) => app.delete(url, config),
};

export default http;
