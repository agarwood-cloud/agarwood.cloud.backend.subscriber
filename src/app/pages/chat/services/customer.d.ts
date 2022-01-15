export interface Customer {
  createdAt: string;
  deletedAt: string;
  email: string | null;
  id: string | number;
  phone: string | null;
  status: 'usable' | 'disabled' | string;
  token: string;
  updatedAt: string;
  username: string;
}
