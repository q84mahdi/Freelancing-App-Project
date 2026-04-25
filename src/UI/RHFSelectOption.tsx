import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface RHFSelectOptionProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: {
    label: string;
    value: string;
  }[];
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  required?: boolean;
  errors: FieldErrors;
}

function RHFSelectOption<T extends FieldValues>({
  label,
  name,
  options,
  register,
  validationSchema,
  required,
  errors,
}: RHFSelectOptionProps<T>) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 text-secondary-600">
        {label} {required && <span className="text-error">*</span>}
      </label>

      <select
        {...register(name, validationSchema)}
        className="w-full rounded-md border-l-8 border-l-transparent bg-secondary-0 p-2 text-secondary-900 outline outline-1 outline-secondary-300 transition-all duration-300 hover:outline-primary-500 focus:outline-primary-500"
        name={name}
        id={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors && errors[name] && (
        <span className="mt-2 block text-sm text-error">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
}
export default RHFSelectOption;
