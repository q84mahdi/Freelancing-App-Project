import Table from "../../../UI/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../Utils/toPersianNumbers";
import truncateText from "../../../Utils/truncateText";

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

function ProposalRow({ index, proposal }) {
  const { description, duration, price, status } = proposal;

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>

      <td>{truncateText(description, 60)}</td>

      <td>{toPersianNumbers(duration)} روز</td>

      <td>{toPersianNumbersWithComma(price)}</td>

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
