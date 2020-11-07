import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import ModalContent from 'components/Modal/types/ModalContent';
import ContextData from './types/ContextData';
// import Modal from './dtos';

const ModalContext = createContext<ContextData>({} as ContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(null as any);
  const [callbackFunction, setCallbackFunction] = useState(null as any);
  const [isCallback, setIsCallback] = useState(false);

  const setModalContent = useCallback(({ value, callback }: ModalContent) => {
    setData(value);

    if (callback) {
      setCallbackFunction(() => callback);
    }
  }, []);

  // Dismiss modal and run callback
  const successCloseModal = useCallback(() => {
    setIsCallback(true);
    setData(null as any);
  }, []);

  // Dismiss modal without callback
  const dismissModal = useCallback(() => {
    setIsCallback(false);
    setData(null as any);
  }, []);

  // Run callback when close modal and reset state
  useEffect(() => {
    if (
      !data &&
      isCallback &&
      !!callbackFunction &&
      typeof callbackFunction === 'function'
    ) {
      callbackFunction();
      setCallbackFunction(null as any);
    }
  }, [data, isCallback, callbackFunction]);

  return (
    <ModalContext.Provider
      value={{
        modalContent: data,
        setModalContent,
        successCloseModal,
        dismissModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider.');
  }

  return context;
}

export { ModalProvider, useModal };
