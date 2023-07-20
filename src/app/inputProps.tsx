import { CSSProperties } from 'react';

export interface inputProps {
  placeholder: string;
  prefix: React.ReactNode;
  styleInput?: CSSProperties;
  classNameInput?: string;
  type?: string;
  onChangeInputValue?: (event: React.FormEvent<HTMLInputElement>) => void;
}
