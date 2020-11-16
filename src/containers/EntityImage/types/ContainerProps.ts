import DefaultProps from 'shared/types';

export default interface ContainerProps extends DefaultProps {
  size?: 'small' | 'large';
  showShadow?: boolean;
  hideFavoriteButton?: boolean;
  showInfo?: boolean;
  hideSubtitle?: boolean;
  disabled?: boolean;
  showEmpty?: boolean;
  showModal?: boolean;
}
