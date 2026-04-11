import { useState, type ReactNode } from "react";
import useOutsideClick from "../Hooks/useOutsideClick";

function Filters({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-md border border-secondary-400 bg-secondary-0 px-6 py-3 font-bold text-secondary-800 transition-all duration-300 hover:border-primary-800 hover:text-primary-900 lg:hidden"
      >
        فیلتر ها
      </button>

      <div
        ref={ref}
        className={`${isOpen ? "fixed left-[32px] top-[150px] flex min-w-[250px] md:left-[40px] md:top-[170px]" : "hidden"} z-0 flex-col gap-x-2 gap-y-4 rounded-md bg-secondary-300 p-2 lg:flex lg:flex-row-reverse lg:items-center lg:bg-transparent`}
      >
        {children}
      </div>
    </div>
  );
}
export default Filters;
