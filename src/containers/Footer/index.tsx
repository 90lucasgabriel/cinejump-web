import React from 'react';
import { Link } from 'react-router-dom';

import DefaultProps from 'shared/types';

import { ReactComponent as Logo } from 'assets/logo.svg';
import RouteEnum from 'routes/enums';

import { Wrapper } from 'components/Layout';
import { Container, LogoContainer, LinksContainer } from './styles';

const Footer: React.FC<DefaultProps> = ({
  theme = 'primary',
  background,
  color,
}) => {
  return (
    <Wrapper
      theme={theme}
      background={background}
      color={color}
      data-testid="footer-container"
    >
      <Container>
        <LinksContainer theme={theme} background={background} color={color}>
          <a href="https://github.com/90lucasgabriel">
            Desenvolvido por Lucas Gabriel
          </a>
          <a href="https://github.com/90lucasgabriel/cinejump-web">
            Sobre o projeto
          </a>
          <a href="https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump">
            Protótipo no Figma
          </a>
          <a href="https://github.com/90lucasgabriel/cinejump-web/wiki">
            Documentação
          </a>
        </LinksContainer>

        <LogoContainer theme={theme} background={background} color={color}>
          <Link to={RouteEnum.BASE}>
            <Logo fill={color} data-testid="footer-logo" />
          </Link>
        </LogoContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
