export type Login = { email: string; password: string };
export type Register = Login & { name: string };
export type Verify = { userId: string; code: string };

export interface RegisterDto {
  message: string;
  verified: false;
  userId: string;
  checkPassword: boolean;
}
