import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

interface RHFRadioInputGroupProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors;
  validationSchema?: RegisterOptions<T, Path<T>>;
  options: { label: string; value: string }[];
}

function RHFRadioInputGroup<T extends FieldValues>({
  register,
  watch,
  errors,
  name,
  validationSchema = {},
  options,
}: RHFRadioInputGroupProps<T>) {
  return (
    <div>
      <div className="flex items-center justify-center gap-x-10">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-x-2">
            <input
              type="radio"
              id={option.value}
              value={option.value}
              {...register(name, validationSchema)}
              checked={watch(name) === option.value}
              className="radioField__input"
            />

            <label
              htmlFor={option.value}
              className="cursor-pointer text-secondary-600"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {errors && errors[name] && (
        <span className="mt-2 block text-sm text-error">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
}
export default RHFRadioInputGroup;
