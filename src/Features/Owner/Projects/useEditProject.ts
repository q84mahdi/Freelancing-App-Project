import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editProjectApi } from "../../../Services/projectService";

export default function useEditProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در ویرایش پروژه";
      toast.error(message);
    },
  });
}
