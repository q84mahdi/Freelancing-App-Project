import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../Services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  return useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(search),
  });
}
