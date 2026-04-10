import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../../Contexts/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="h-5 w-5 text-primary-800 hover:text-primary-900" />
      ) : (
        <HiOutlineMoon className="h-5 w-5 text-primary-800 hover:text-primary-900" />
      )}
    </button>
  );
}
export default DarkModeToggle;
