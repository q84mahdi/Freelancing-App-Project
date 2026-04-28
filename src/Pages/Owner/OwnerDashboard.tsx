import DashboardHeader from "../../UI/DashboardHeader";
import Loader from "../../UI/Loader";
import Stats from "../../Features/Owner/Stats";
import useOwnerProjects from "../../Features/Owner/Projects/useOwnerProjects";

function OwnerDashboard() {
  const { isLoading, data } = useOwnerProjects();

  if (isLoading || !data) return <Loader />;

  return (
    <div>
      <DashboardHeader />

      <Stats projects={data.projects} />
    </div>
  );
}
export default OwnerDashboard;
