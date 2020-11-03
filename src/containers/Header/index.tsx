import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DefaultProps from 'shared/dtos';

import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { ReactComponent as Logo } from 'assets/logo.svg';

import Route from 'routes/enums';
import { Wrapper } from 'components/Layout';
import { Button } from 'components';
import { SearchModal } from 'containers';
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
  const [isSearch, setIsSearch] = useState(false);

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
            onClick={() => setIsSearch(true)}
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

      <SearchModal isShow={isSearch} onClose={() => setIsSearch(false)} />
    </Wrapper>
  );
};

export default Header;
