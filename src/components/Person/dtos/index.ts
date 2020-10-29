import ContainerProps from './ContainerProps';

export default interface PersonProps extends ContainerProps {
  id: number;
  profile: string;
  name: string;
  character: string;
}
