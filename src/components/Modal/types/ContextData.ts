import ModalProps from 'components/Modal/types/ModalProps';
import StyleProps from 'components/Modal/types/StyleProps';

export default interface ContextData {
  modalContent: any;
  modalProps: StyleProps;
  setModalContent(params: ModalProps): void;
  successCloseModal(): void;
  dismissModal(): void;
}
