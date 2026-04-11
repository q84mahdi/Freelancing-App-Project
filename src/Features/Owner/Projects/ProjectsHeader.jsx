import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../UI/Modal";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 flex items-center justify-between px-4">
      <h1 className="text-xl font-black text-secondary-700">پروژه های شما</h1>

      <button
        onClick={() => setIsOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus className="h-5 w-5" />

        <span>افزودن پروژه جدید</span>
      </button>

      <Modal
        title="افزودن پروژه جدید"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <CreateProjectForm onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
export default ProjectsHeader;
