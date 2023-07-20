import { Form } from 'antd';
import { formProps } from '../app/formProps';

function customForm(props: formProps) {
  return (
    <Form
      name={props.name}
      labelCol={props.labelCol}
      wrapperCol={props.wrapperCol}
      style={props.formStyle}
      onFinish={props.onFinishForm}
      onFinishFailed={props.onFinishFailedForm}>
      {props.children}
    </Form>
  );
}

export default customForm;
