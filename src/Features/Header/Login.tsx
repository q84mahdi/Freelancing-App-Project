import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/auth")}>
      <HiOutlineArrowLeftOnRectangle className="h-5 w-5 text-secondary-600 hover:text-success" />
    </button>
  );
}
export default Login;
