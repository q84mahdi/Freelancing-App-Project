import ProposalTable from "../Features/Proposals/ProposalTable";

function FreelancerProposals() {
  return (
    <div>
      <h1 className="mb-8 text-xl font-black text-secondary-700">
        لیست درخواست های شما
      </h1>

      <ProposalTable />
    </div>
  );
}
export default FreelancerProposals;
