import { ButtonHTMLAttributes } from 'react';

export default interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'basic' | 'raised' | 'outlined' | 'icon';
}
