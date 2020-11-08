import { ButtonHTMLAttributes } from 'react';
import DefaultProps from 'shared/types';

export default interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DefaultProps {
  loading?: boolean;
  variant?: 'basic' | 'raised' | 'outlined' | 'icon' | 'icon-fill';
}
