import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { changeProposalStatusApi } from "../../Services/proposalService";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["project", id] });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
