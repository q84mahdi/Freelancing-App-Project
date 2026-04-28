import { HiArrowRight } from "react-icons/hi";
import type { Project } from "../../../Types/projectTypes";
import useMoveBack from "../../../Hooks/useMoveBack";

interface ProjectHeaderProps {
  project: Project;
}

function ProjectHeader({ project }: ProjectHeaderProps) {
  const moveBack = useMoveBack();

  return (
    <div className="mb-8 flex items-center gap-x-4">
      <button onClick={moveBack}>
        <HiArrowRight className="h-5 w-5 text-secondary-500" />
      </button>

      <h1 className="text-lg font-black text-secondary-700">
        لیست درخواست های پروژه {project.title}
      </h1>
    </div>
  );
}
export default ProjectHeader;
