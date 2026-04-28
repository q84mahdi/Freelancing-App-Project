import type {
  AdminLoginRequest,
  AdminLoginResponse,
  CheckOtpRequest,
  CheckOtpResponse,
  CompleteProfileRequest,
  CompleteProfileResponse,
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
): Promise<CheckOtpResponse> => {
  const res = await http.post<ApiResponse<CheckOtpResponse>, CheckOtpRequest>(
    "/user/check-otp",
    data,
  );
  return res.data.data;
};

export const completeProfileApi = async (
  data: CompleteProfileRequest,
): Promise<CompleteProfileResponse> => {
  const res = await http.post<
    ApiResponse<CompleteProfileResponse>,
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
