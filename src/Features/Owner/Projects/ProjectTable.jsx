import Empty from "../../UI/Empty";
import Loader from "../../UI/Loader";
import Table from "../../UI/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName={"پروژه ای"} />;
  console.log(projects);

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>

      <Table.Body>
        {projects
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
      </Table.Body>
    </Table>
  );
}
export default ProjectTable;
