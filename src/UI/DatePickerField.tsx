import DatePicker, { type Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

interface DatePickerFieldProps {
  label: string;
  name: string;
  date: Value;
  setDate: (value: Value) => void;
  format: string;
}

function DatePickerField({ label, name, date, setDate }: DatePickerFieldProps) {
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode") || "");

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
