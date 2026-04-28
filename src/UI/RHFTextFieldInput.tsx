import type { HTMLInputTypeAttribute } from "react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface RHFTextFieldInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validationSchema: RegisterOptions<T, Path<T>>;
  errors: FieldErrors<T>;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
}

function RHFTextFieldInput<T extends FieldValues>({
  label,
  name,
  register,
  validationSchema,
  errors,
  required = false,
  type = "text",
}: RHFTextFieldInputProps<T>) {
  return (
    <div>
      <label className="mb-2 text-secondary-600" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        autoComplete="off"
        className="textField__input"
      />

      {errors && errors[name] && (
        <span className="mt-2 block text-sm text-error">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
}
export default RHFTextFieldInput;
