import Stats from "../Features/Admin/Stats";
import useUsers from "../Features/Admin/useUsers";
import useProjects from "../Hooks/useProjects";
import useProposals from "../Hooks/useProposals";
import DashboardHeader from "../UI/DashboardHeader";
import Loader from "../UI/Loader";

function AdminDashboard() {
  const { isLoading: isLoading1, users } = useUsers();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, proposals } = useProposals();

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div>
      <DashboardHeader />

      <Stats users={users} projects={projects} proposals={proposals} />
    </div>
  );
}
export default AdminDashboard;
