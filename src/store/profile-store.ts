import { authService } from '@/services';
import { User } from '@/types';
import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }

  me?: IPromiseBasedObservable<User> | null = null;

  async logout() {
    this.me = null;
  }

  async current() {
    this.me = fromPromise(authService.current());
  }
}

export const profileStore = new ProfileStore();
