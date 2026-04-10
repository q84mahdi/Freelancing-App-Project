import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../Services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });

      navigate("/", { replace: true });

      if (window.location.pathname === "/") {
        window.location.reload();
      }
    },
  });
}
