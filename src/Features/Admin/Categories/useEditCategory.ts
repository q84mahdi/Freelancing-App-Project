import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCategoryApi } from "../../../Services/categoryService";

export default function useEditCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editCategoryApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در ویرایش دسته‌بندی";
      toast.error(message);
    },
  });
}
