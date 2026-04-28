import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { toggleProjectStatusApi } from "../../../Services/projectService";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleProjectStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در تغییر وضعیت پروژه";
      toast.error(message);
    },
  });
}
