import { HiCheck, HiCollection, HiViewGrid } from "react-icons/hi";
import Stat from "../../UI/Stat";
import type { ProjectDetails } from "../../Types/projectTypes";

function Stats({ projects }: { projects: ProjectDetails[] }) {
  const numOfProjects = projects.length;

  const numOfAcceptedProjects = projects.map(
    (project) => project.status === "OPEN",
  ).length;

  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0,
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Stat
        icon={<HiViewGrid className="h-16 w-16" />}
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
      />

      <Stat
        icon={<HiCheck className="h-16 w-16" />}
        title="پروژه های تایید شده"
        value={numOfAcceptedProjects}
        color="green"
      />

      <Stat
        icon={<HiCollection className="h-16 w-16" />}
        title="درخواست ها"
        value={numOfProposals}
        color="yellow"
      />
    </div>
  );
}
export default Stats;
