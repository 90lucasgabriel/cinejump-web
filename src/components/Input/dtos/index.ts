import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}
