import ContainerProps from './ContainerProps';

export default interface MovieProps extends ContainerProps {
  id: number;
  favorite: boolean;
  mediaType: number;
  poster?: string;
  backdrop?: string;
}
