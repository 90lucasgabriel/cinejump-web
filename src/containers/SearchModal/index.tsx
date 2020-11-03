import React, { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { Multi } from 'domains/Search/api';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { ReactComponent as Empty } from 'assets/empty.svg';
import { SearchInput } from 'components';
import { ResultList } from 'containers';
import {
  Container,
  Backdrop,
  ModalContainer,
  Modal,
  ResultsContainer,
  LoadingContainer,
  EmptyContainer,
  EmptyImage,
  EmptyLabel,
} from './styles';

const SearchModal: React.FC<any> = ({ onClose, isShow }) => {
  const minLength = useMemo(() => 3, []);
  const wait = useMemo(() => 750, []);
  const [data, setData] = useState([] as any);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = useCallback(() => {
    setKeyword('');
    setData([] as any);
    onClose();
  }, [onClose]);

  const delayedRequest = useCallback(
    debounce(async (params: any) => {
      const response = await Multi(params);
      setData(response);
      setIsLoading(false);
    }, wait),
    [],
  );

  const handleSearch = useCallback(
    async (value: string) => {
      setKeyword(value);

      if (value.length >= minLength) {
        setIsLoading(true);
        const params = { query: value };
        delayedRequest(params);

        return;
      }

      setData([] as any);
    },
    [minLength, delayedRequest],
  );

  if (!isShow) {
    return null;
  }

  return (
    <Container>
      <Backdrop onClick={handleClose} />
      <ModalContainer>
        <Modal>
          <SearchInput onKeyUp={(e: any) => handleSearch(e.target.value)} />
          {keyword.length >= minLength && (
            <ResultsContainer onClick={handleClose}>
              {isLoading && (
                <LoadingContainer>
                  <Loading />
                </LoadingContainer>
              )}

              {!isLoading && data?.length > 0 && (
                <ResultList data={data} isLoading={isLoading} />
              )}

              {!isLoading && data?.length === 0 && (
                <EmptyContainer>
                  <EmptyImage>
                    <Empty />
                  </EmptyImage>
                  <EmptyLabel>Ops... Nenhum resultado encontrado.</EmptyLabel>
                </EmptyContainer>
              )}
            </ResultsContainer>
          )}
        </Modal>
      </ModalContainer>
    </Container>
  );
};

export default SearchModal;
