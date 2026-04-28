import type { ApiResponse, EmptyResponse } from "../Types/globalTypes";
import type {
  ChangeProposalStatusRequest,
  CreateProposalRequest,
  Proposal,
  ProposalStatus,
} from "../Types/proposalTypes";
import http from "./httpService";

export const getProposalsApi = async (
  qs: string,
): Promise<{ proposals: Proposal[] }> => {
  const res = await http.get<ApiResponse<{ proposals: Proposal[] }>>(
    `/proposal/list${qs}`,
  );
  return res.data.data;
};

export const changeProposalStatusApi = async ({
  proposalId,
  data,
}: ChangeProposalStatusRequest): Promise<EmptyResponse> => {
  const res = await http.patch<
    ApiResponse<EmptyResponse>,
    {
      status: ProposalStatus;
      projectId: string;
    }
  >(`/proposal/${proposalId}`, data);
  return res.data.data;
};

export const createProposalApi = async (
  data: CreateProposalRequest,
): Promise<EmptyResponse> => {
  const res = await http.post<
    ApiResponse<EmptyResponse>,
    CreateProposalRequest
  >("/proposal/add", data);
  return res.data.data;
};
