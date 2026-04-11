import Table from "../../UI/Table";
import ProposalRow from "./ProposalRow";
import Empty from "../../UI/Empty";

function ProposalTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName={"درخواستی"} />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProposalTable;
