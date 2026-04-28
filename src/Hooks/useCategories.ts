import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../Services/categoryService";
import type { Category } from "../Types/categoryTypes";

interface Categories {
  categories: Category[];
}

interface SelectedCategory extends Categories {
  transformedCategoriesId: {
    label: string;
    value: string;
  }[];
  transformedCategoriesET: {
    label: string;
    value: string;
  }[];
}

export default function useCategories() {
  return useQuery<{ categories: Category[] }, Error, SelectedCategory>({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
    select: (data) => ({
      ...data,

      transformedCategoriesId: data.categories.map((category) => ({
        label: category.title,
        value: category._id,
      })),
      
      transformedCategoriesET: data.categories.map((category) => ({
        label: category.title,
        value: category.englishTitle,
      })),
    }),
  });
}
