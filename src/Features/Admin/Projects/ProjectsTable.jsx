import useProjects from "../../../Hooks/useProjects";
import Empty from "../../../UI/Empty";
import Loader from "../../../UI/Loader";
import Table from "../../../UI/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
      </Table.Header>

      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} index={index} project={project} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProjectsTable;
