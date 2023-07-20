import { UserOutlined, LockOutlined } from '@ant-design/icons';
import CustomForm from './shared/customForm';
import CustomInput from './shared/customInput';

import './App.css';
import './app/authorization/authorizationForm.css';
import inputValue from './features/authorization/inputValue';
import CustomCheckbox from './shared/customCheckbox';
import changeCheckbox from './features/authorization/changeCheckbox';
import CustomButton from './shared/customButton';
import { Form } from 'antd';
import authenticationStore from './entities/authenticationStore';
import { toJS } from 'mobx';

function App() {
  const onFinish = (values: any) => {
    console.log('values', values);
    console.log('СТОР', toJS(authenticationStore.getuserInformation()));
  };

  return (
    <div>
      <CustomForm name='userAuthenticationStore' onFinishForm={onFinish}>
        <Form.Item name='login'>
          <CustomInput
            placeholder='Введите логин'
            prefix={<UserOutlined />}
            onChangeInputValue={(event) => inputValue('userLogin', event)}
          />
        </Form.Item>
        <Form.Item name='password'>
          <CustomInput
            placeholder='Введите пароль'
            prefix={<LockOutlined />}
            type='password'
            onChangeInputValue={(event) => inputValue('userPassword', event)}
          />
        </Form.Item>
        <Form.Item name='remember'>
          <CustomCheckbox
            checkboxText='Запомнить меня'
            onChangeCheckbox={(event) => changeCheckbox(event)}
          />
        </Form.Item>
        <Form.Item>
          <CustomButton buttonType='primary' buttonHtmlType='submit' buttonText='Войти' />
        </Form.Item>
      </CustomForm>
    </div>
  );
}

export default App;
