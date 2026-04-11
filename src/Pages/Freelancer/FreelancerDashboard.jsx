import Stats from "../Features/Freelancer/Stats";
import useProposals from "../Hooks/useProposals";
import DashboardHeader from "../UI/DashboardHeader";
import Loader from "../UI/Loader";

function FreelancerDashboard() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />

      <Stats proposals={proposals} />
    </div>
  );
}
export default FreelancerDashboard;
