import { TbPencilMinus } from "react-icons/tb";
import Table from "../../UI/Table";
import toLocalDateShort from "../../Utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../Utils/toPersianNumbers";
import truncateText from "../../Utils/truncateText";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import Modal from "../../UI/Modal";
import ConfirmDelete from "../../UI/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "../Projects/CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { isDeleting, removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>

      <td>{truncateText(project.title, 30)}</td>

      <td>{project.category.title}</td>

      <td>{toPersianNumbersWithComma(project.budget)}</td>

      <td>{toLocalDateShort(project.deadline)}</td>

      <td>
        <div className="flex max-w-[200px] flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>

      <td>{project.freelancer?.name || "-"}</td>

      <td>
        <ToggleProjectStatus project={project} />
      </td>

      <td>
        <div className="flex items-center justify-center gap-x-2 text-right">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="h-5 w-5 text-primary-900" />
            </button>

            <Modal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              title={`ویرایش ${project.title}`}
            >
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                projectToEdit={project}
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
              title={`حذف ${project.title}`}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={isDeleting ? true : false}
              />
            </Modal>
          </>
        </div>
      </td>

      <td>
        <Link to={project._id} className="flex items-center justify-center">
          <HiEye className="h-5 w-5 text-primary-900" />
        </Link>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
