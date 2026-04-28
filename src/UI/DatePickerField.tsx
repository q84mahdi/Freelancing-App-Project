import DatePicker from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

interface DatePickerFieldProps {
  label: string;
  name: string;
  date: Value;
  setDate: (value: Value) => void;
}

function DatePickerField({ label, name, date, setDate }: DatePickerFieldProps) {
  const isDarkMode = localStorage.getItem("isDarkMode") === "true";

  return (
    <div>
      <label htmlFor={name} className="mb-2 text-secondary-600">
        {label}
      </label>

      <DatePicker
        name={name}
        id={name}
        value={date}
        onChange={setDate}
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="top-center"
        className={isDarkMode ? "bg-dark" : ""}
      />
    </div>
  );
}

export default DatePickerField;
