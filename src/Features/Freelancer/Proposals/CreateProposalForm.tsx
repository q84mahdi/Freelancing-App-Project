import { useForm } from "react-hook-form";
import RHFTextFieldInput from "../../../UI/RHFTextFieldInput";
import Loader from "../../../UI/Loader";
import useCreateProposal from "./useCreateProposal";

interface CreateProposalFormProps {
  onClose: () => void;
  projectId: string;
}

interface CreateProposalFormValues {
  description: string;
  price: string;
  duration: string;
}

function CreateProposalForm({ onClose, projectId }: CreateProposalFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProposalFormValues>();

  const { isPending: isCreating, mutate: createProposal } = useCreateProposal();

  const onSubmit = (data: CreateProposalFormValues) => {
    const newProposal = { ...data, projectId };

    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-right">
      <RHFTextFieldInput
        label="توضیحات"
        name="description"
        register={register}
        validationSchema={{
          required: "نوشتن توضیحات ضروری می باشد",
          minLength: {
            value: 10,
            message: "توضیحات حداقل باید ۱۰ کارکتر باشد",
          },
        }}
        errors={errors}
      />

      <RHFTextFieldInput
        label="هزینه"
        name="price"
        register={register}
        validationSchema={{
          required: "نوشتن هزینه ضروری می باشد",
        }}
        errors={errors}
        type="number"
      />

      <RHFTextFieldInput
        label="مدت زمان"
        name="duration"
        register={register}
        validationSchema={{
          required: "نوشتن مدت زمان ضروری می باشد",
        }}
        errors={errors}
        type="number"
      />

      {isCreating ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary !mb-4 w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default CreateProposalForm;
