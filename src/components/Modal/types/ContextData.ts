import ModalContent from 'components/Modal/types/ModalContent';

export default interface ContextData {
  modalContent: any;
  setModalContent(params: ModalContent): void;
  successCloseModal(): void;
  dismissModal(): void;
}
