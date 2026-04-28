import { Field, Label, Switch } from "@headlessui/react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <Field className="flex flex-row items-center justify-center gap-x-2">
      <Switch
        checked={checked}
        onChange={onChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-error transition data-[checked]:bg-success"
      >
        <span className="size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6" />
      </Switch>

      <Label>{label}</Label>
    </Field>
  );
}
export default Toggle;
