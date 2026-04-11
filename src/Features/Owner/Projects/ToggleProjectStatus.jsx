import useToggleProjectStatus from "./useToggleProjectStatus";
import Loader from "../../UI/Loader";
import Toggle from "../../UI/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

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
