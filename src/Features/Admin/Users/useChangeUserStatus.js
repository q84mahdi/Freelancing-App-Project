import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../Services/authService";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeUserStatus };
}
