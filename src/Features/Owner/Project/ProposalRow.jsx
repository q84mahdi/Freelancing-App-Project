import Table from "../../UI/Table";
import truncateText from "../../Utils/truncateText";
import { TbStatusChange } from "react-icons/tb";
import Modal from "../../UI/Modal";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../Utils/toPersianNumbers";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { user, description, duration, price, status } = proposal;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>

      <td>{truncateText(user.name, 10)}</td>

      <td>{truncateText(description, 50)}</td>

      <td>{toPersianNumbers(duration)} روز</td>

      <td>{toPersianNumbersWithComma(price)}</td>

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>

      <td>
        <button onClick={() => setIsOpen(true)}>
          <TbStatusChange className="h-5 w-5 text-primary-900" />
        </button>

        <Modal
          title="تغییر وضعیت درخواست"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <ChangeProposalStatus
            proposal={proposal}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
