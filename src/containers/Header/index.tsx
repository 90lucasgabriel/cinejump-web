import React from 'react';

import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { ReactComponent as Logo } from 'assets/logo.svg';

import { Color } from 'shared/enums';
import RouteEnum from 'routes/enums';
import { Wrapper } from 'components/Layout';
import Button from 'components/Button';
import { Container, MenuContainer, Link, ActionMenuContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper theme="primary">
      <Container>
        <MenuContainer>
          <Link to={RouteEnum.BASE}>Filmes</Link>
          <Link to={RouteEnum.BASE}>Séries</Link>
        </MenuContainer>

        <Link to={RouteEnum.BASE}>
          <Logo fill={Color.Fill} />
        </Link>

        <ActionMenuContainer>
          <Button variant="icon">
            <FiSearch />
          </Button>
          <Button variant="icon">
            <FaRegUserCircle />
          </Button>
        </ActionMenuContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
