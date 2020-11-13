import React from 'react';

import { useModal } from 'components/Modal/hooks';
import { EnvironmentLabel, Modal } from 'components';

const GlobalComponents: React.FC = () => {
  const { modalContent, modalProps } = useModal();

  return (
    <>
      <EnvironmentLabel />
      <Modal {...modalProps}>{modalContent}</Modal>
    </>
  );
};

export default GlobalComponents;
