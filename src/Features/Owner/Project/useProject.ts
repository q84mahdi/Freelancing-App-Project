import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../../Services/projectService";

export default function useProject(id: string) {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry: false,
  });
}
