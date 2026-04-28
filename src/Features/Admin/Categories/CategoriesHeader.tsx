import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../../UI/Modal";
import CreateCategoryForm from "./CreateCategoryForm";

function CategoriesHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-xl font-black text-secondary-700">
        لیست دسته بندی ها
      </h1>

      <button
        onClick={() => setIsOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus className="h-5 w-5" />

        <span>افزودن دسته بندی</span>
      </button>

      <Modal
        title="افزودن دسته بندی جدید"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <CreateCategoryForm onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
export default CategoriesHeader;
