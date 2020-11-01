import DefaultProps from 'shared/dtos';

export default interface ResultProps extends DefaultProps {
  data: any;
  isLoading?: boolean;
}
