import DefaultProps from 'shared/types';

export default interface ResultProps extends DefaultProps {
  data: any;
  size?: 'small' | 'large';
  emptyMessage?: string;
  isLoading?: boolean;
}
