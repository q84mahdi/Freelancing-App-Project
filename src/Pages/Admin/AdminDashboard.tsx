import Stats from "../../Features/Admin/Stats";
import useUsers from "../../Features/Admin/useUsers";
import useProjects from "../../Hooks/useProjects";
import useProposals from "../../Hooks/useProposals";
import DashboardHeader from "../../UI/DashboardHeader";
import Loader from "../../UI/Loader";

function AdminDashboard() {
  const { isLoading: isLoading1, data: users } = useUsers();
  const { isLoading: isLoading2, data: projects } = useProjects();
  const { isLoading: isLoading3, data: proposals } = useProposals();

  if (
    isLoading1 ||
    isLoading2 ||
    isLoading3 ||
    !users ||
    !projects ||
    !proposals
  )
    return <Loader />;

  return (
    <div>
      <DashboardHeader />

      <Stats
        users={users.users.length}
        projects={projects.projects.length}
        proposals={proposals.proposals.length}
      />
    </div>
  );
}
export default AdminDashboard;
