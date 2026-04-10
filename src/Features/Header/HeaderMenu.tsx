import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import AdminLogin from "./AdminLogin";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "./Logout";
import Login from "./Login";

const ROLES = {
  ADMIN: "admin",
  OWNER: "owner",
  FREELANCER: "freelancer",
};

function HeaderMenu() {
  const { isLoading, data } = useUser();

  if (isLoading || !data) return;

  const { user } = data;

  return (
    <div>
      <ul className="flex items-center gap-x-2 md:gap-x-4">
        {user.role !== "ADMIN" && <AdminLogin />}

        {user.isActive && (
          <li className="flex">
            <Link to={`/${ROLES[user.role]}/dashboard`}>
              <HiOutlineUser className="h-5 w-5 text-primary-800 hover:text-primary-900" />
            </Link>
          </li>
        )}

        <li className="flex">
          <DarkModeToggle />
        </li>

        <li className="flex">{user.isActive ? <Logout /> : <Login />}</li>
      </ul>
    </div>
  );
}
export default HeaderMenu;
