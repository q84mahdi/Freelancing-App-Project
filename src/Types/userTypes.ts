export type UserStatus = 0 | 1 | 2;

export type UserRole = "FREELANCER" | "OWNER" | "ADMIN";

export interface ChangeUserStatusRequest {
  id: string;
  data: {
    status: UserStatus;
  };
}

export interface User {
  _id: string;
  biography: string | null;
  phoneNumber: string;
  isVerifiedPhoneNumber: boolean;
  isActive: boolean;
  status: UserStatus;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  avatarUrl: string | null;
}
