import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'domains/Auth/hooks';

import { ReactComponent as Avatar } from 'assets/avatar.svg';
import { ColumnLayout, Button } from 'components';
import { Footer, Header } from 'containers';
import { ContentContainer } from './styles';

const Profile: React.FC = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
    history.push('/');
  }, [logout, history]);

  return (
    <ColumnLayout>
      <Header theme="secondary" />
      <ContentContainer>
        <Avatar />

        <Button onClick={handleLogout} variant="outlined" theme="light">
          Logout
        </Button>
      </ContentContainer>
      <Footer theme="secondary" />
    </ColumnLayout>
  );
};

export default Profile;
