import ProjectHeader from "../Features/Project/ProjectHeader";
import ProposalTable from "../Features/Project/ProposalTable";
import useProject from "../Features/Project/useProject";
import Loader from "../UI/Loader";

function OwnerProject() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loader />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
}
export default OwnerProject;
