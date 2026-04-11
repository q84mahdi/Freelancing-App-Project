import { useForm } from "react-hook-form";
import Loader from "../../../UI/Loader";
import RHFSelectOption from "../../../UI/RHFSelectOption";
import useChangeUserStatus from "./useChangeUserStatus";

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

function ChangeUserStatus({ user, onClose }) {
  const { _id: userId, status } = user;

  const { register, handleSubmit } = useForm({ defaultValues: { status } });

  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const onSubmit = (data) => {
    changeUserStatus(
      { id: userId, data },
      {
        onSuccess: () => onClose(),
      },
    );
  };

  return (
    <form className="space-y-4 text-right" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelectOption
        label="تغییر وضعیت کاربر به حالت :"
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
export default ChangeUserStatus;
