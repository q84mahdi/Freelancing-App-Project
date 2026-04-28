import { NavLink, type To } from "react-router-dom";
import { useToggle } from "../Contexts/ToggleContext";
import type { ReactNode } from "react";

interface CustomNavlinkProps {
  children: ReactNode;
  to: To;
}

function CustomNavlink({ children, to }: CustomNavlinkProps) {
  const navLinkClass =
    "flex items-center gap-x-2 rounded-md p-2 transition-all duration-300";

  const { setIsToggleOpen } = useToggle();

  return (
    <li>
      <NavLink
        onClick={() => setIsToggleOpen(false)}
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-primary-100/80 text-primary-900`
            : `${navLinkClass} bg-secondary-100 text-secondary-600 hover:bg-primary-100/80 hover:text-primary-900`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavlink;
