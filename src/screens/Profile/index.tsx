import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'domains/Auth/hooks';
import { ColumnLayout, Wrapper, Container } from 'components/Layout';

const Profile: React.FC = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = useCallback(
    e => {
      e.preventDefault();
      logout();
      history.push('/');
    },
    [logout, history],
  );

  return (
    <ColumnLayout>
      <Wrapper>
        <Container>
          <h1>Profile Screen</h1>
          <button type="submit" onClick={e => handleLogout(e)}>
            Logout
          </button>
        </Container>
      </Wrapper>
    </ColumnLayout>
  );
};

export default Profile;
