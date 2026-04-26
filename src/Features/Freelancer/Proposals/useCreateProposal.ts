import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../../Services/proposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProposalApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["proposals"] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در ایجاد درخواست جدید";
      toast.error(message);
    },
  });
}
