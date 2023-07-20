/* eslint-disable react-refresh/only-export-components */
import { Checkbox } from 'antd';
import { checkboxProps } from '../app/checkboxProps';
import { observer } from 'mobx-react';

function CustomCheckbox(props: checkboxProps) {
  return (
    <Checkbox
      onChange={props.onChangeCheckbox}
      defaultChecked={false}
      className={props.classNameCheckbox}>
      {props.checkboxText}
    </Checkbox>
  );
}

export default observer(CustomCheckbox);
