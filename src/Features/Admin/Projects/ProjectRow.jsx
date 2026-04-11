import Table from "../../../UI/Table";
import truncateText from "../../../Utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../Utils/toPersianNumbers";
import toLocalDateShort from "../../../Utils/toLocalDateShort";

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

function ProjectRow({ index, project }) {
  const { title, budget, deadline, status } = project;

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
    </Table.Row>
  );
}
export default ProjectRow;
