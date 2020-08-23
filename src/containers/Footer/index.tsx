import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { Color } from 'shared/enums';
import RouteEnum from 'routes/enums/Route';

import { Wrapper } from 'components/Layout';
import { Container, LogoContainer, LinksContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper theme="primary">
      <Container>
        <LinksContainer>
          <a href="https://github.com/90lucasgabriel">
            Desenvolvido por Lucas Gabriel
          </a>
          <a href="/">Proposta do projeto</a>
          <a href="https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump">
            Protótipo no Figma
          </a>
          <a href="/">Apresentação ao Comitê</a>
          <a href="https://github.com/90lucasgabriel/cinejump-web/wiki">
            Documentação
          </a>
        </LinksContainer>

        <LogoContainer>
          <Link to={RouteEnum.BASE}>
            <Logo fill={Color.Fill} />
          </Link>
        </LogoContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
