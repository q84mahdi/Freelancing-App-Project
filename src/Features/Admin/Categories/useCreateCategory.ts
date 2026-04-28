import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategoryApi } from "../../../Services/categoryService";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategoryApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در ایجاد دسته‌بندی جدید";
      toast.error(message);
    },
  });
}
