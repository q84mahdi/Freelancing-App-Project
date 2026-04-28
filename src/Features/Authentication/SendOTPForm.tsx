import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import Loader from "../../UI/Loader";
import RHFTextFieldInput from "../../UI/RHFTextFieldInput";

interface SendOTPFormProps<T extends FieldValues> {
  name: Path<T>;
  onSendOtp: () => void;
  isSendingOtp: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

function SendOTPForm<T extends FieldValues>({
  name,
  onSendOtp,
  isSendingOtp,
  register,
  errors,
}: SendOTPFormProps<T>) {
  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={onSendOtp}
    >
      <h2 className="text-center text-lg font-bold text-secondary-900">
        سلام! خوش آمدید
      </h2>

      <RHFTextFieldInput
        label="لطفا شماره موبایل خود را وارد کنید"
        name={name}
        register={register}
        type="number"
        validationSchema={{
          required: "وارد کردن شماره موبایل ضروری می باشد",
          pattern: {
            value: /^09[0-9]{9}$/,
            message: "شماره موبایل وارد شده نامعتبر است",
          },
        }}
        errors={errors}
        required
      />

      {isSendingOtp ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
}
export default SendOTPForm;
