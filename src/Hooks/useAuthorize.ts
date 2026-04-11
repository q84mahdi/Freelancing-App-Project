import { useLocation } from "react-router-dom";
import useUser from "./useUser";

const ROLES = {
  admin: "ADMIN",
  owner: "OWNER",
  freelancer: "FREELANCER",
} as const;

export default function useAuthorize() {
  const { isLoading, data } = useUser();
  const { user } = data || {};

  const { pathname } = useLocation();

  const desiredRole = pathname.split("/").at(1);

  let isAuthenticated = false;
  let isAuthorized = false;
  let isVerified = false;

  // change user authentication
  if (user) isAuthenticated = true;

  // change user authorization
  if (desiredRole && Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole as keyof typeof ROLES])
      isAuthorized = true;
  }

  // change user verification
  if (user && Number(user.status) === 2) isVerified = true;

  return { isLoading, isAuthenticated, isAuthorized, isVerified, user };
}
