import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../Services/userService";

export default function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    retry: 2,
  });
}
