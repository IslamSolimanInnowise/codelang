export type User = { id: number; username: string; role: string } | null;

export interface UsersState {
  users: User[];
  user: User;
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
}
