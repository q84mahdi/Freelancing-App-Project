import { useForm } from "react-hook-form";
import Loader from "../../../UI/Loader";
import RHFSelectOption from "../../../UI/RHFSelectOption";
import type { User, UserStatus } from "../../../Types/userTypes";
import useChangeUserStatus from "./useChangeUserStatus";

interface ChangeUserStatus {
  user: User;
  onClose: () => void;
}

interface ChangeUserStatusValues {
  status: UserStatus;
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

function ChangeUserStatus({ user, onClose }: ChangeUserStatus) {
  const { _id: userId, status } = user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeUserStatusValues>({
    defaultValues: { status },
  });

  const { isPending: isUpdating, mutate: changeUserStatus } =
    useChangeUserStatus();

  const onSubmit = (data: ChangeUserStatusValues) => {
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
export default ChangeUserStatus;
