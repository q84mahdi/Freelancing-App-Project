import { Link } from "react-router-dom";
import { useToggle } from "../Contexts/ToggleContext";
import type { ReactNode } from "react";

function Sidebar({ children }: { children: ReactNode }) {
  const { setIsToggleOpen } = useToggle();

  return (
    <div className="min-h-screen border-l border-secondary-300 bg-secondary-0 p-4">
      <Link
        to="/"
        onClick={() => setIsToggleOpen(false)}
        className="mb-4 flex flex-row items-center justify-center gap-x-2 md:hidden"
      >
        <img className="h-10 w-10 md:h-14 md:w-14" src="/logo.svg" alt="Logo" />

        <h3 className="font-bold text-primary-900">سایت فریلنسری</h3>
      </Link>

      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}
export default Sidebar;
