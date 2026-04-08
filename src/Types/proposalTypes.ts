import type { User } from "./userTypes";

export type ProposalStatus = 0 | 1 | 2;

export interface CreateProposalRequest {
  description: string;
  price: string;
  duration: string;
  projectId: string;
}

export interface ChangeProposalStatusRequest {
  proposalId: string;
  data: {
    status: ProposalStatus;
    projectId: string;
  };
}

export interface Proposal {
  _id: string;
  price: number;
  duration: number;
  description: string;
  user: Pick<User, "_id" | "name" | "avatarUrl">;
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
}
