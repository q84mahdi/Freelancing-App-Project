import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeCategoryApi } from "../../../Services/categoryService";

export default function useRemoveCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCategoryApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (error) => {
      const messgae =
        error instanceof Error ? error.message : "خطا در حذف دسته‌بندی";
      toast.error(messgae);
    },
  });
}
