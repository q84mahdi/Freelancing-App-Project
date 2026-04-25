import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProjectApi } from "../../../Services/projectService";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در ایجاد پروژه جدید";
      toast.error(message);
    },
  });
}
