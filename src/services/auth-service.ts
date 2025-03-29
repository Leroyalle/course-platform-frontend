import { Login, Register, RegisterDto, User, UserWithToken, Verify } from '@/types';
import { instance } from './instace';

class AuthService {
  async login(data: Login) {
    return (await instance.post<UserWithToken>('/auth/login', data)).data;
  }

  async register(data: Register) {
    return (await instance.post<RegisterDto>('/auth/register', data)).data;
  }

  async verify(data: Verify) {
    return (await instance.post('/auth/verify', data)).data;
  }

  async current() {
    return (await instance.get<User>('/user/profile')).data;
  }
}

export const authService = new AuthService();
