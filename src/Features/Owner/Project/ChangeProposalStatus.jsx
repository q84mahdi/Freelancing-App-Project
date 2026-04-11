import { useForm } from "react-hook-form";
import RHFSelectOption from "../../UI/RHFSelectOption";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loader from "../../UI/Loader";
import { useParams } from "react-router-dom";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتطار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ proposal, onClose }) {
  const { _id: proposalId, status } = proposal;

  const { register, handleSubmit } = useForm({
    defaultValues: { status },
  });

  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();

  const { id: projectId } = useParams();

  const onSubmit = (data) => {
    changeProposalStatus(
      {
        proposalId,
        projectId,
        ...data,
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
