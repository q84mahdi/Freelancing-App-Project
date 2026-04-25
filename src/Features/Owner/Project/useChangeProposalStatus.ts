import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { changeProposalStatusApi } from "../../../Services/proposalService";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();

  const { id } = useParams();

  return useMutation({
    mutationFn: changeProposalStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["project", id] });
    },

    onError: (error) => {
      const message =
        error instanceof Error ? error.message : "خطا در تغییر وضعیت درخواست";
      toast.error(message);
    },
  });
}
