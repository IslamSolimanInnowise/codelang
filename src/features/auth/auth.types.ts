export interface AuthState {
  isLoading: boolean;
  error: string | null;
  user: { id: number; username: string; role: string } | null;
}

export interface UserData {
  username: string;
  password: string;
}

export type ThunkReturnType = AuthState["user"];

export interface ThunkApiType {
  rejectValue: string | null;
}
