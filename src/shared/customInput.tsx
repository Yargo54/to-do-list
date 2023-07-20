/* eslint-disable react-refresh/only-export-components */
import { Input } from 'antd';
import { inputProps } from '../app/inputProps';
import { observer } from 'mobx-react-lite';

function CustomInput(props: inputProps) {
  return (
    <Input
      prefix={props.prefix}
      placeholder={props.placeholder}
      style={props.styleInput}
      className={props.classNameInput}
      type={props.type}
      onChange={props.onChangeInputValue}
    />
  );
}

export default observer(CustomInput);
