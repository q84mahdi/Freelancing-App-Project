import { useSearchParams } from "react-router-dom";
import type { ChangeEventHandler } from "react";

interface FilterDropDownProps {
  filterField: string;
  options: {
    label: string;
    value: string;
  }[];
}

function FilterDropDown({ options, filterField }: FilterDropDownProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(filterField) || "";

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="rounded-md border-l-8 border-l-transparent bg-secondary-0 p-2 text-secondary-900 outline outline-1 outline-secondary-300 transition-all duration-300 hover:outline-primary-500 focus:outline-primary-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default FilterDropDown;
