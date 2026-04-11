import { useForm } from "react-hook-form";
import TextFieldInput from "../../UI/TextFieldInput";
import useCreateProposal from "./useCreateProposal";
import Loader from "../../UI/Loader";

function CreateProposalForm({ onClose, projectId }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    const newProposal = { ...data, projectId };

    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 text-right"
    >
      <TextFieldInput
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

      <TextFieldInput
        label="هزینه"
        name="price"
        register={register}
        validationSchema={{
          required: "نوشتن هزینه ضروری می باشد",
        }}
        errors={errors}
        type="number"
      />

      <TextFieldInput
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
