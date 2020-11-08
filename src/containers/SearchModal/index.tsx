import React, { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { Multi } from 'domains/Search/api';

import { SearchInput } from 'components';
import { EntitySummaryList } from 'containers';
import { Container, ResultsContainer } from './styles';

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
          <EntitySummaryList data={data} isLoading={isLoading} size="small" />
        </ResultsContainer>
      )}
    </Container>
  );
};

export default SearchModal;
