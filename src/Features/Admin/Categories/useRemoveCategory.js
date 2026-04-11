import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeCategoryApi } from "../../../Services/categoryService";

export default function useRemoveCategory() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeCategory } = useMutation({
    mutationFn: removeCategoryApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeCategory };
}
