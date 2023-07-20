import { CheckboxChangeEvent } from 'antd/es/checkbox';

export interface checkboxProps {
  checkboxText?: string;
  classNameCheckbox?: string;
  onChangeCheckbox: (event: CheckboxChangeEvent) => void;
}
