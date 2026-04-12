import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { getOtpApi } from "../../Services/authService";

export interface GetOtpValues {
  phoneNumber: string;
}

function AuthContainer() {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const { data } = useUser();

  useEffect(() => {
    if (data && data.user.isActive) return navigate("/", { replace: true });
  }, [data, navigate]);

  const {
    isPending,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtpApi,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<GetOtpValues>();

  const sendOtpHandler = async (data: GetOtpValues) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "خطا در ارسال کد تایید";
      toast.error(message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            name="phoneNumber"
            register={register}
            onSendOtp={handleSubmit(sendOtpHandler)}
            errors={errors}
            isSendingOtp={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            setStep={setStep}
            phoneNumber={getValues("phoneNumber")}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse?.message}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
}
export default AuthContainer;
