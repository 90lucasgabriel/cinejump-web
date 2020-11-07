import React, { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { Multi } from 'domains/Search/api';

import { ReactComponent as Loading } from 'assets/loading.svg';
import { ReactComponent as Empty } from 'assets/empty.svg';
import { SearchInput } from 'components';
import { EntitySummaryList } from 'containers';
import {
  Container,
  ResultsContainer,
  LoadingContainer,
  EmptyContainer,
  EmptyImage,
  EmptyLabel,
} from './styles';

const SearchModal: React.FC<any> = ({ onClose }) => {
  const minLength = useMemo(() => 3, []);
  const wait = useMemo(() => 750, []);
  const [data, setData] = useState([] as any);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      if (value !== keyword) {
        setKeyword(value);

        if (value.length >= minLength) {
          setIsLoading(true);
          const params = { query: value };
          delayedRequest(params);

          return;
        }

        setData([] as any);
      }
    },
    [keyword, minLength, delayedRequest],
  );

  return (
    <Container>
      <SearchInput onKeyUp={(e: any) => handleSearch(e.target.value)} />
      {keyword.length >= minLength && (
        <ResultsContainer>
          {isLoading && (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          )}

          {!isLoading && data?.length > 0 && (
            <EntitySummaryList data={data} isLoading={isLoading} />
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
    </Container>
  );
};

export default SearchModal;
