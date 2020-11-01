import ContainerProps from './ContainerProps';

export default interface MovieProps extends ContainerProps {
  id: number;
  favorite: boolean;
  mediaType?: string;
  poster?: string;
  backdrop?: string;
}
