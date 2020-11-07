import DefaultProps from 'shared/dtos';
import ContainerProps from './ContainerProps';

export default interface ResultProps extends DefaultProps, ContainerProps {
  data: any;
}
