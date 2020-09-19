import React from 'react';
import { useHistory } from 'react-router-dom';

import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { ReactComponent as Logo } from 'assets/logo.svg';

import { Color } from 'shared/enums';
import Route from 'routes/enums';
import { Wrapper } from 'components/Layout';
import Button from 'components/Button';
import { Container, MenuContainer, Link, ActionMenuContainer } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Wrapper theme="primary">
      <Container>
        <MenuContainer>
          <Link to={Route.BASE}>Filmes</Link>
          <Link to={Route.BASE}>Séries</Link>
        </MenuContainer>

        <Link to={Route.BASE}>
          <Logo fill={Color.Fill} />
        </Link>

        <ActionMenuContainer>
          <Button variant="icon">
            <FiSearch />
          </Button>
          <Button variant="icon" onClick={() => history.push(Route.LOGIN)}>
            <FaRegUserCircle />
          </Button>
        </ActionMenuContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
