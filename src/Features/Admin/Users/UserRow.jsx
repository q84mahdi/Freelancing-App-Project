import { useState } from "react";
import Modal from "../../../UI/Modal";
import Table from "../../../UI/Table";
import { TbStatusChange } from "react-icons/tb";
import ChangeUserStatus from "./ChangeUserStatus";
import { toPersianNumbers } from "../../../Utils/toPersianNumbers";

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

const roles = {
  ADMIN: "ادمین",
  OWNER: "کارفرما",
  FREELANCER: "فریلنسر",
};

function UserRow({ user, index }) {
  const { name, email, role, status } = user;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>

      <td>{name || "-"}</td>

      <td>{email || "-"}</td>

      <td>{roles[role] || "-"}</td>

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
          title="تغییر وضعیت کاربر"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <ChangeUserStatus user={user} onClose={() => setIsOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
}
export default UserRow;
