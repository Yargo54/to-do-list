/* eslint-disable react-refresh/only-export-components */
import { Button } from 'antd';
import { buttonProps } from '../app/buttonProps';

function CustomButton(props: buttonProps) {
  return (
    <Button
      type={props.buttonType as never}
      htmlType={props.buttonHtmlType as never}
      className={props.classNameButton}
      onClick={props.onClickButton}>
      {props.buttonText}
    </Button>
  );
}

export default CustomButton;
