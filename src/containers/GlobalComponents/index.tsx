import React from 'react';

import { useModal } from 'components/Modal/hooks';
import { EnvironmentLabel, Modal } from 'components';

const GlobalComponents: React.FC = () => {
  const { modalContent } = useModal();

  return (
    <>
      <EnvironmentLabel />
      <Modal>{modalContent}</Modal>
    </>
  );
};

export default GlobalComponents;
