import { CheckboxChangeEvent } from 'antd/es/checkbox';
import authenticationStore from '../../entities/authenticationStore';

function changeCheckbox(event: CheckboxChangeEvent) {
  authenticationStore.setUserInformation('rememberUserStatus', event.target.checked);
}

export default changeCheckbox;
