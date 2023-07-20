import React, { CSSProperties } from 'react';

export interface formProps {
  name?: string;
  labelCol?: { span: number };
  wrapperCol?: { span: number };
  formStyle?: CSSProperties;
  onFinishForm: (values: object) => void;
  onFinishFailedForm?: (values: object) => void;
  children: React.ReactNode;
}
