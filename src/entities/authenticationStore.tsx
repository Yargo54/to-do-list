import { makeAutoObservable } from 'mobx';

export interface userAuthentication {
  userLogin: string;
  userPassword: string;
  rememberUserStatus: boolean;
}

class AuthenticationStore {
  userInformation = {} as userAuthentication;

  constructor() {
    makeAutoObservable(this);
  }

  setUserInformation(key: keyof userAuthentication, value: string | boolean) {
    this.userInformation[key] = value as never;
  }

  getuserInformation() {
    return this.userInformation;
  }
}

export default new AuthenticationStore();
