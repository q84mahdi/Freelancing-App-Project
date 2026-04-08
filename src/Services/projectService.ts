import type { ApiResponse, EmptyResponse } from "../Types/globalTypes";
import type {
  CreateProjectRequest,
  EditProjectRequest,
  Project,
  ProjectDetails,
  ProjectStatus,
  ToggleProjectStatusRequest,
} from "../Types/projectTypes";
import http from "./httpService";

export const getProjectApi = async (
  id: string,
): Promise<{ project: ProjectDetails }> => {
  const res = await http.get<ApiResponse<{ project: ProjectDetails }>>(
    `/project/${id}`,
  );
  return res.data.data;
};

export const getProjectsApi = async (
  qs: string,
): Promise<{ projects: Project[] }> => {
  const res = await http.get<ApiResponse<{ projects: Project[] }>>(
    `/project/list${qs}`,
  );
  return res.data.data;
};

export const getOwnerProjectsApi = async (): Promise<{
  projects: ProjectDetails[];
}> => {
  const res = await http.get<ApiResponse<{ projects: ProjectDetails[] }>>(
    "/project/owner-projects",
  );
  return res.data.data;
};

export const removeProjectApi = async (id: string): Promise<EmptyResponse> => {
  const res = await http.delete<ApiResponse<EmptyResponse>>(`/project/${id}`);
  return res.data.data;
};

export const createProjectApi = async (
  data: CreateProjectRequest,
): Promise<EmptyResponse> => {
  const res = await http.post<ApiResponse<EmptyResponse>, CreateProjectRequest>(
    "/project/add",
    data,
  );
  return res.data.data;
};

export const editProjectApi = async ({
  id,
  data,
}: EditProjectRequest): Promise<EmptyResponse> => {
  const res = await http.patch<
    ApiResponse<EmptyResponse>,
    CreateProjectRequest
  >(`/project/update/${id}`, data);
  return res.data.data;
};

export const toggleProjectStatusApi = async ({
  id,
  data,
}: ToggleProjectStatusRequest): Promise<EmptyResponse> => {
  const res = await http.patch<
    ApiResponse<EmptyResponse>,
    { status: ProjectStatus }
  >(`/project/${id}`, data);
  return res.data.data;
};
