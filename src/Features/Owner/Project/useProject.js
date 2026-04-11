import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../Services/projectService";
import { useParams } from "react-router-dom";

export default function useProject() {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    retry: false,
  });

  const { project } = data || {};

  return { isLoading, project };
}
