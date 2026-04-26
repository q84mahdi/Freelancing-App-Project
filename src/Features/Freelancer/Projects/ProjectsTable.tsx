import useProjects from "../../../Hooks/useProjects";
import Empty from "../../../UI/Empty";
import Loader from "../../../UI/Loader";
import Table from "../../../UI/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, data } = useProjects();

  if (isLoading || !data) return <Loader />;

  if (!data.projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {data.projects.map((project, index) => (
          <ProjectRow key={project._id} index={index} project={project} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProjectsTable;
