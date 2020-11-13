import StyleProps from 'components/Modal/types/StyleProps';

export default interface ModalProps {
  value: any;
  callback?: any;
  dismissCallback?: any;
  props?: StyleProps;
}
