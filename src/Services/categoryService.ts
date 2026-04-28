import type {
  Category,
  CreateCategoryRequest,
  EditCategoryRequest,
} from "../Types/categoryTypes";
import type { ApiResponse, EmptyResponse } from "../Types/globalTypes";
import http from "./httpService";

export const getCategoriesApi = async (): Promise<{
  categories: Category[];
}> => {
  const res =
    await http.get<ApiResponse<{ categories: Category[] }>>("/category/list");
  return res.data.data;
};

export const createCategoryApi = async (
  data: CreateCategoryRequest,
): Promise<EmptyResponse> => {
  const res = await http.post<
    ApiResponse<EmptyResponse>,
    CreateCategoryRequest
  >("/admin/category/add", data);
  return res.data.data;
};

export const editCategoryApi = async ({
  id,
  data,
}: EditCategoryRequest): Promise<EmptyResponse> => {
  const res = await http.patch<
    ApiResponse<EmptyResponse>,
    CreateCategoryRequest
  >(`/admin/category/update/${id}`, data);
  return res.data.data;
};

export const removeCategoryApi = async (id: string): Promise<EmptyResponse> => {
  const res = await http.delete<ApiResponse<EmptyResponse>>(
    `/admin/category/remove/${id}`,
  );
  return res.data.data;
};
