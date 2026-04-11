import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../Hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col items-center gap-y-4 pt-14">
        <p className="text-xl font-bold text-primary-900">
          صفحه مورد نظر یافت نشد !
        </p>

        <button
          className="btn btn--secondary flex items-center gap-x-2"
          onClick={moveBack}
        >
          <HiArrowRight />
          <span>بازگشت</span>
        </button>
      </div>
    </div>
  );
}
export default NotFound;
