import { Transition } from "@headlessui/react";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../Hooks/useOutsideClick";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

function Modal({ open, onClose, title, children }: ModalProps) {
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <Transition
      show={open}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed left-0 top-0 z-50 h-screen w-full bg-secondary-800 bg-opacity-30 backdrop-blur-sm">
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-secondary-0 px-5 py-3 shadow-lg sm:max-w-md"
        >
          <div className="mb-6 flex items-center justify-between border-b border-b-secondary-300 pb-1">
            <p className="text-base font-bold text-secondary-600">{title}</p>

            <button onClick={onClose}>
              <HiOutlineX className="h-5 w-5 text-error" />
            </button>
          </div>

          {children}
        </div>
      </div>
    </Transition>
  );
}
export default Modal;
