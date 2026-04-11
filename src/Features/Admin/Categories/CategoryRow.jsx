import { useState } from "react";
import Table from "../../../UI/Table";
import Modal from "../../../UI/Modal";
import { TbPencilMinus } from "react-icons/tb";
import CreateCategoryForm from "./CreateCategoryForm";
import { HiOutlineTrash } from "react-icons/hi";
import truncateText from "../../../Utils/truncateText";
import ConfirmDelete from "../../../UI/ConfirmDelete";
import useRemoveCategory from "./useRemoveCategory";
import { toPersianNumbers } from "../../../Utils/toPersianNumbers";

function CategoryRow({ index, category }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { isDeleting, removeCategory } = useRemoveCategory();

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>

      <td>{category.title}</td>

      <td>{truncateText(category.description, 60)}</td>

      <td>{category.englishTitle}</td>

      <td>{category.type}</td>

      <td>
        <div className="flex items-center justify-center gap-x-2 text-right">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="h-5 w-5 text-primary-900" />
            </button>

            <Modal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              title={`ویرایش ${category.title}`}
            >
              <CreateCategoryForm
                onClose={() => setIsEditOpen(false)}
                categoryToEdit={category}
              />
            </Modal>
          </>

          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="h-5 w-5 text-error" />
            </button>

            <Modal
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
              title={`حذف ${category.title}`}
            >
              <ConfirmDelete
                resourceName={category.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeCategory(category._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={isDeleting ? true : false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}
export default CategoryRow;
