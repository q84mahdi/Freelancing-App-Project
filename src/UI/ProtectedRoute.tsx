import { useEffect, type ReactNode } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthorize from "../Hooks/useAuthorize";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  // load the user information
  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorize();

  //check for authentication, authorization and verification
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");

    if (!isAuthorized && !isLoading) navigate("/not-access");

    if (!isVerified && isAuthorized && !isLoading) {
      toast("حساب کاربری شما هنوز تایید نشده است");
      navigate("/");
    }
  }, [isAuthenticated, isAuthorized, isVerified, isLoading, navigate]);

  // check for loading
  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-secondary-100">
        <Loader />
      </div>
    );

  // render the app after checking
  if (isAuthenticated && isAuthorized && isVerified) return children;
}
export default ProtectedRoute;
