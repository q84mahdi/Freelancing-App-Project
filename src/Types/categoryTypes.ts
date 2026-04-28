export interface CreateCategoryRequest {
  title: string;
  description: string;
  englishTitle: string;
  type: "project";
}

export interface EditCategoryRequest {
  id: string;
  data: CreateCategoryRequest;
}

export interface Category {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  type: "project";
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}
