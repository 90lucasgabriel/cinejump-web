import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'domains/Auth/hooks';
import { Button } from 'components';
import { Container } from './styles';

const Profile: React.FC = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
    history.push('/');
  }, [logout, history]);

  return (
    <Container>
      <h1>Profile Screen</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default Profile;
