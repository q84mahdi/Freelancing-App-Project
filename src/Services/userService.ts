import type { ApiResponse, EmptyResponse } from "../Types/globalTypes";
import type {
  ChangeUserStatusRequest,
  User,
  UserStatus,
} from "../Types/userTypes";
import http from "./httpService";

export const getUserApi = async (): Promise<{ user: User }> => {
  const res = await http.get<ApiResponse<{ user: User }>>("/user/profile");
  return res.data.data;
};

export const getUsersApi = async (qs: string): Promise<{ users: User[] }> => {
  const res = await http.get<ApiResponse<{ users: User[] }>>(
    `/admin/user/list${qs}`,
  );
  return res.data.data;
};

export const changeUserStatusApi = async ({
  id,
  data,
}: ChangeUserStatusRequest): Promise<EmptyResponse> => {
  const res = await http.patch<
    ApiResponse<EmptyResponse>,
    { status: UserStatus }
  >(`/admin/user/verify/${id}`, data);
  return res.data.data;
};
