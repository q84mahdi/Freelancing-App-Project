import { Outlet } from "react-router-dom";
import { useToggle } from "../Contexts/ToggleContext";
import useOutsideClick from "../Hooks/useOutsideClick";
import type { ReactNode } from "react";
import Header from "../Features/Header/Header";

function AppLayout({ children }: { children: ReactNode }) {
  const { isToggleOpen, setIsToggleOpen } = useToggle();

  const ref = useOutsideClick<HTMLDivElement>(() => setIsToggleOpen(false));

  return (
    <div className="grid h-screen w-full grid-cols-[1fr] grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]">
      <Header />

      <div
        className={`${isToggleOpen ? "backdrop-blur-sm" : "hidden"} fixed left-0 top-0 row-span-2 row-start-1 h-screen w-full overflow-y-auto md:relative md:block`}
      >
        <div ref={ref} className="fixed w-[200px] md:relative md:w-full">
          {children}
        </div>
      </div>

      <div className="overflow-y-auto bg-secondary-100 p-8 md:col-start-2">
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
