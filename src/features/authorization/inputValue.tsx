import authenticationStore, { userAuthentication } from '../../entities/authenticationStore';

function inputValue(key: keyof userAuthentication, event: React.FormEvent<HTMLInputElement>) {
  authenticationStore.setUserInformation(key, event.currentTarget.value);
}

export default inputValue;
