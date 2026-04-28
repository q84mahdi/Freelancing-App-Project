import { useSearchParams } from "react-router-dom";

interface FilterButtonProps {
  title: string;
  filterField: string;
  options: {
    label: string;
    value: string;
  }[];
}

function FilterButton({ filterField, options, title }: FilterButtonProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0)?.value;

  const handleClick = (value: string) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-4 text-secondary-900">
      <span>{title}</span>

      <div className="flex items-center gap-x-2 rounded-lg border border-secondary-300 bg-secondary-0 p-0.5">
        {options.map(({ value, label }) => {
          const isActive = currentFilter === value;

          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleClick(value)}
              className={`whitespace-nowrap rounded-md px-4 py-1.5 font-bold transition-all duration-300 ${isActive ? "bg-primary-900 text-white" : "bg-secondary-0 text-secondary-800"}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default FilterButton;
