export interface User {
  id: string;
  name: string;
  kana: string;
  email: string;
  postcode: string;
  address: string;
  phone: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
