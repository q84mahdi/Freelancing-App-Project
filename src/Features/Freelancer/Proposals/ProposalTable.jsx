import useProposals from "../../Hooks/useProposals";
import Empty from "../../UI/Empty";
import Loader from "../../UI/Loader";
import Table from "../../UI/Table";
import ProposalRow from "./ProposalRow";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;

  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>مدت زمان</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} index={index} proposal={proposal} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProposalTable;
