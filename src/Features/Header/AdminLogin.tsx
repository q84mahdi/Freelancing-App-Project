import useAdminLogin from "./useAdminLogin";

function AdminLogin() {
  const { isPending, login } = useAdminLogin();

  const loginAdminHandler = () => {
    login({ phoneNumber: "09111111111" });
  };

  return (
    <button
      className="btn btn--primary p-2 whitespace-nowrap text-sm"
      onClick={loginAdminHandler}
    >
      {isPending ? "در حال ورود" : "ورود به پنل ادمین"}
    </button>
  );
}
export default AdminLogin;
