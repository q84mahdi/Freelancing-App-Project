import type { Category } from "./categoryTypes";
import type { Proposal } from "./proposalTypes";
import type { User } from "./userTypes";

export type ProjectStatus = "OPEN" | "CLOSED";

export interface CreateProjectRequest {
  title: string;
  description: string;
  tags: string[];
  category: string;
  budget: string;
  deadline: string;
}

export interface EditProjectRequest {
  id: string;
  data: CreateProjectRequest;
}

export interface ToggleProjectStatusRequest {
  id: string;
  data: {
    status: ProjectStatus;
  };
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  category: Pick<Category, "_id" | "title" | "englishTitle">;
  budget: number;
  tags: string[];
  deadline: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectDetails {
  _id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  category: Pick<Category, "_id" | "title" | "englishTitle">;
  budget: number;
  tags: string[];
  deadline: string;
  createdAt: string;
  updatedAt: string;
  proposals: Proposal[];
  owner: Pick<User, "_id" | "name" | "avatarUrl">;
  freelancer: Pick<User, "_id" | "name" | "avatarUrl">;
}
