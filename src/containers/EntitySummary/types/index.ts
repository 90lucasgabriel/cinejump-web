import DefaultProps from 'shared/types';
import ContainerProps from './ContainerProps';

export default interface ResultProps extends DefaultProps, ContainerProps {
  data: any;
}
