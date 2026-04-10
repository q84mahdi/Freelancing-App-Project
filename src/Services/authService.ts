import type {
  AdminLoginRequest,
  AdminLoginResponse,
  CheckOtpRequest,
  CompleteProfileRequest,
  GetOtpRequest,
} from "../Types/authTypes";
import type { ApiResponse, EmptyResponse } from "../Types/globalTypes";
import http from "./httpService";

export const getOtpApi = async (
  data: GetOtpRequest,
): Promise<EmptyResponse> => {
  const res = await http.post<ApiResponse<EmptyResponse>, GetOtpRequest>(
    "/user/get-otp",
    data,
  );
  return res.data.data;
};

export const checkOtpApi = async (
  data: CheckOtpRequest,
): Promise<EmptyResponse> => {
  const res = await http.post<ApiResponse<EmptyResponse>, CheckOtpRequest>(
    "/user/check-otp",
    data,
  );
  return res.data.data;
};

export const completeProfileApi = async (
  data: CompleteProfileRequest,
): Promise<EmptyResponse> => {
  const res = await http.post<
    ApiResponse<EmptyResponse>,
    CompleteProfileRequest
  >("/user/complete-profile", data);
  return res.data.data;
};

export const logoutApi = async (): Promise<EmptyResponse> => {
  const res = await http.post<ApiResponse<EmptyResponse>, void>("/user/logout");
  return res.data.data;
};

export const adminLoginApi = async (
  data: AdminLoginRequest,
): Promise<AdminLoginResponse> => {
  const res = await http.post<
    ApiResponse<AdminLoginResponse>,
    AdminLoginRequest
  >("/user/admin-auth", data);
  return res.data.data;
};
