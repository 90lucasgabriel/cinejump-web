import DefaultProps from 'shared/types';

export default interface Props extends DefaultProps {
  title?: string;
  data: any[];
  isLoading?: boolean;
  message?: string;
}
