import ContainerProps from './ContainerProps';

export default interface MovieProps extends ContainerProps {
  id: number;
  favorite: boolean;
  mediaType: number;
  backdrop?: string;

  featuredImage?: string;
  title?: string;
  subtitle?: string;

  isLoading?: boolean;
}
