export interface GetOtpRequest {
  phoneNumber: string;
}

export interface CheckOtpRequest {
  phoneNumber: string;
  otp: string;
}

export interface CompleteProfileRequest {
  name: string;
  email: string;
  role: "FREELANCER" | "OWNER";
}

export interface AdminLoginRequest {
  phoneNumber: string;
}
