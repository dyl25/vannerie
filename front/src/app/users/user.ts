export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  token: string = null;
  created_at: Date;
  updated_at: Date;
}
