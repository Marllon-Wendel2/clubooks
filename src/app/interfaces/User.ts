export interface UserPayload {
  userName: string;
  email: string;
  sub: string;
}

export interface User {
  name: string;
  userName: string;
  email: string;
  _id: string;
  phone: string;
  avatar: string;
  date_birth: string;
}

export type UpdateUserDto = Partial<User>
