import ContainerProps from './ContainerProps';

export default interface MovieProps extends ContainerProps {
  id: number;
  favorite: boolean;
  poster?: string;
  backdrop?: string;
}
