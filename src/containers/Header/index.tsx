import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import DefaultProps from 'shared/types';

import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { ReactComponent as Logo } from 'assets/logo.svg';

import { useModal } from 'components/Modal/hooks';
import { SearchModal } from 'containers';
import Route from 'routes/enums';
import { Wrapper } from 'components/Layout';
import { Button } from 'components';
import {
  Container,
  MenuContainer,
  Link,
  LogoContainer,
  ActionMenuContainer,
} from './styles';

const Header: React.FC<DefaultProps> = ({
  theme = 'primary',
  background,
  color,
}) => {
  const history = useHistory();
  const { setModalContent } = useModal();

  const handleSearch = useCallback(() => {
    setModalContent({
      value: <SearchModal />,
    });
  }, [setModalContent]);

  return (
    <Wrapper theme={theme} background={background} color={color}>
      <Container>
        <MenuContainer theme={theme} background={background} color={color}>
          <Link to={Route.BASE}>Filmes</Link>
          <Link to={Route.BASE}>Séries</Link>
        </MenuContainer>

        <LogoContainer theme={theme} background={background} color={color}>
          <Link to={Route.BASE}>
            <Logo fill={color} />
          </Link>
        </LogoContainer>

        <ActionMenuContainer theme={theme}>
          <Button
            variant="icon"
            theme={theme}
            color={color}
            onClick={handleSearch}
          >
            <FiSearch />
          </Button>
          <Button
            variant="icon-fill"
            theme={theme}
            color={color}
            onClick={() => history.push(Route.LOGIN)}
          >
            <FaRegUserCircle />
          </Button>
        </ActionMenuContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
