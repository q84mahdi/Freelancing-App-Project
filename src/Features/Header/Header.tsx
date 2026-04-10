import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";
import useUser from "../../Hooks/useUser";
import { useToggle } from "../../Contexts/ToggleContext";

function Header({ home = false }: { home?: boolean }) {
  const { isLoading } = useUser();

  const { setIsToggleOpen } = useToggle();

  return (
    <div className="border-b border-secondary-300 bg-secondary-0 px-3 py-2 md:col-start-2 md:px-8">
      <div
        className={`container flex items-center justify-between gap-x-2 px-0 xl:max-w-screen-lg ${isLoading ? "opacity-30 blur-sm" : ""}`}
      >
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <Link to="/">
            <img
              className={
                home
                  ? "h-10 w-10 lg:h-14 lg:w-14"
                  : "hidden h-10 w-10 md:block lg:h-14 lg:w-14"
              }
              src="/logo.svg"
              alt="Logo"
            />
          </Link>

          {!home && (
            <button className="md:hidden" onClick={() => setIsToggleOpen(true)}>
              <HiOutlineMenu className="h-7 w-7 text-primary-900" />
            </button>
          )}

          <UserAvatar />
        </div>

        <HeaderMenu />
      </div>
    </div>
  );
}
export default Header;
