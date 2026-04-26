import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getUsersApi } from "../../Services/userService";

export default function useUsers() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  return useQuery({
    queryKey: ["users", queryObject],
    queryFn: () => getUsersApi(search),
  });
}
