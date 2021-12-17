export interface User {
  id: number;
  username: string;
  email?: string|null;
  phone?: string|null;
  gender?: string|null;
  status?: string|null;
  createdAt?: string|null;
  updatedAt?: string|null;
  deletedAt?: string|null;
  token?: string|null;
}
