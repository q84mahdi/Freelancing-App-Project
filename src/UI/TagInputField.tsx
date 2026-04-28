import { TagsInput } from "react-tag-input-component";

interface TagInputFieldProps {
  label: string;
  name: string;
  value: string[];
  onChange: (tags: string[]) => void;
}

function TagInputField({ label, name, value, onChange }: TagInputFieldProps) {
  return (
    <div>
      <label className="mb-2 text-secondary-600">{label}</label>

      <TagsInput name={name} value={value} onChange={onChange} />
    </div>
  );
}
export default TagInputField;
