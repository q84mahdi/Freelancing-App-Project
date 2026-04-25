import { useForm } from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useParams } from "react-router-dom";
import type { Proposal, ProposalStatus } from "../../../Types/proposalTypes";
import RHFSelectOption from "../../../UI/RHFSelectOption";
import Loader from "../../../UI/Loader";

interface ChangeProposalStatusProps {
  proposal: Proposal;
  onClose: () => void;
}

interface ChangeProposalStatusValues {
  status: ProposalStatus;
}

const options = [
  {
    label: "رد شده",
    value: "0",
  },
  {
    label: "در انتطار تایید",
    value: "1",
  },
  {
    label: "تایید شده",
    value: "2",
  },
];

function ChangeProposalStatus({
  proposal,
  onClose,
}: ChangeProposalStatusProps) {
  const { _id: proposalId, status } = proposal;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeProposalStatusValues>({
    defaultValues: { status },
  });

  const { isPending: isUpdating, mutate: changeProposalStatus } =
    useChangeProposalStatus();

  const { id: projectId } = useParams();

  const onSubmit = (data: ChangeProposalStatusValues) => {
    if (!projectId) return;

    changeProposalStatus(
      {
        proposalId,
        data: {
          projectId,
          ...data,
        },
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  return (
    <form className="space-y-4 text-right" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelectOption
        label="تغییر وضعیت درخواست به حالت :"
        name="status"
        options={options}
        register={register}
        errors={errors}
      />

      {isUpdating ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default ChangeProposalStatus;
