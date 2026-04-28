import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../Services/userService";

export default function useChangeUserStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeUserStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در تغییر وضعیت کاربر";
      toast.error(message);
    },
  });
}
