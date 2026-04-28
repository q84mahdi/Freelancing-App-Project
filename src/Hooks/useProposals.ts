import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../Services/proposalService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProposals() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  return useQuery({
    queryKey: ["proposals", queryObject],
    queryFn: () => getProposalsApi(search),
  });
}
