import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeProjectApi } from "../../../Services/projectService";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در حذف پروژه";
      toast.error(message);
    },
  });
}
