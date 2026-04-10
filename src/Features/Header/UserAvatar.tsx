import useUser from "../../Hooks/useUser";

function UserAvatar() {
  const { isLoading, data } = useUser();

  if (isLoading || !data)
    return (
      <div className="flex items-center">
        <img
          src="/user.jpg"
          alt="user-account"
          className="h-7 w-7 rounded-full object-cover object-center"
        />
      </div>
    );

  if (data.user.isActive)
    return (
      <div className="flex items-center gap-x-2 text-secondary-600">
        <img
          src="/user.jpg"
          alt="user-account"
          className="h-7 w-7 rounded-full object-cover object-center"
        />

        <span className="truncate text-nowrap text-sm md:text-base">
          {data.user.name}
        </span>
      </div>
    );
}
export default UserAvatar;
