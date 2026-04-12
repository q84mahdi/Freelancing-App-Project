import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useUser from "../../Hooks/useUser";
import { completeProfileApi } from "../../Services/authService";
import RHFTextFieldInput from "../../UI/RHFTextFieldInput";
import RHFRadioInputGroup from "../../UI/RHFRadioInputGroup";

interface CompleteProfileValues {
  name: string;
  email: string;
  role: "FREELANCER" | "OWNER";
}

function CompleteProfileForm() {
  const navigate = useNavigate();

  const { data } = useUser();
  const { user } = data || {};

  useEffect(() => {
    if (user && user.isActive) return navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CompleteProfileValues>();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfileApi,
  });

  const onSubmit = async (data: CompleteProfileValues) => {
    try {
      const { user, message } = await mutateAsync(data);

      toast.success(message);

      navigate("/");

      if (user.status === 0) {
        toast("اطلاعات حساب کاربری شما رد شده است.");
        return;
      }

      if (user.status === 1) {
        toast("اطلاعات حساب کاربری  شما در حال بررسی است.");
        return;
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "خطا در تایید اطلاعات کاربر";
      toast.error(message);
    }
  };

  return (
    <form
      className="mx-4 space-y-6 rounded-lg border border-secondary-300 px-3 py-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-8 text-center text-xl font-bold text-secondary-900">
        تکمیل اطلاعات
      </h2>

      <RHFTextFieldInput
        label="نام و نام خانوادگی"
        name="name"
        register={register}
        validationSchema={{
          required: "وارد کردن نام و نام خانوادگی ضروری می باشد",
        }}
        errors={errors}
      />

      <RHFTextFieldInput
        label="ایمیل"
        name="email"
        register={register}
        validationSchema={{
          required: "وارد کردن ایمیل ضروری می باشد",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "ایمیل وارد شده نامعتبر است",
          },
        }}
        errors={errors}
      />

      <RHFRadioInputGroup
        register={register}
        watch={watch}
        errors={errors}
        name="role"
        validationSchema={{
          required: "انتخاب یک نقش ضروری می باشد",
        }}
        options={[
          { label: "کارفرما", value: "OWNER" },
          { label: "فریلنسر", value: "FREELANCER" },
        ]}
      />

      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default CompleteProfileForm;
