import { useParams } from "react-router-dom";
import ProjectHeader from "../../Features/Owner/Project/ProjectHeader";
import ProposalTable from "../../Features/Owner/Project/ProposalTable";
import useProject from "../../Features/Owner/Project/useProject";
import Loader from "../../UI/Loader";

function OwnerProject() {
  const { id } = useParams();

  if (!id) return;

  const { isLoading, data } = useProject(id);
  const { project } = data || {};

  if (isLoading || !project) return <Loader />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
}
export default OwnerProject;
