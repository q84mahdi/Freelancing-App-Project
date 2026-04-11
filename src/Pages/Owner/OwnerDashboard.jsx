import Stats from "../Features/Owner/Stats";
import useOwnerProjects from "../Features/Projects/useOwnerProjects";
import DashboardHeader from "../UI/DashboardHeader";
import Loader from "../UI/Loader";

function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />

      <Stats projects={projects} />
    </div>
  );
}
export default OwnerDashboard;
