import type { ProjectDetails } from "../../../Types/projectTypes";
import Loader from "../../../UI/Loader";
import Toggle from "../../../UI/Toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";

function ToggleProjectStatus({ project }: { project: ProjectDetails }) {
  const { status } = project;

  const { isPending: isUpdating, mutate: toggleProjectStatus } =
    useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";

    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader width={50} height={20} />
      ) : (
        <Toggle
          checked={status === "OPEN" ? true : false}
          onChange={toggleHandler}
          label={status === "OPEN" ? "باز" : "بسته"}
        />
      )}
    </div>
  );
}
export default ToggleProjectStatus;
