import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../UI/Table";
import toLocalDateShort from "../../../Utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../Utils/toPersianNumbers";
import truncateText from "../../../Utils/truncateText";
import Modal from "../../../UI/Modal";
import { useState } from "react";
import type { Project } from "../../../Types/projectTypes";
import CreateProposalForm from "../Proposals/CreateProposalForm";

interface ProjectRowProps {
  index: number;
  project: Project;
}

const statusStyle = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ index, project }: ProjectRowProps) {
  const { title, budget, deadline, status } = project;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>

      <td>{truncateText(title, 40)}</td>

      <td>{toPersianNumbersWithComma(budget)}</td>

      <td>{toLocalDateShort(deadline)}</td>

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>

      <td>
        <button onClick={() => setIsOpen(true)}>
          <MdAssignmentAdd className="h-5 w-5 text-primary-900" />
        </button>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreateProposalForm
            onClose={() => setIsOpen(false)}
            projectId={project._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
