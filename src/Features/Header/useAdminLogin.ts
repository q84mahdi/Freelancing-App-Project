import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { adminLoginApi } from "../../Services/authService";

export default function useAdminLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: login } = useMutation({
    mutationFn: adminLoginApi,

    onSuccess: async (data) => {
      queryClient.setQueryData(["user"], data.user);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(data.message);
      navigate("/admin");
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در ورود کاربر ادمین";
      toast.error(message);
    },
  });

  return { isPending, login };
}
