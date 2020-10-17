import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import GlobalStyle from 'shared/styles/global';
import { EnvironmentProvider } from 'domains/Environment/hooks';
import { AuthProvider } from 'domains/Auth/hooks';
import { FavoriteProvider } from 'domains/Favorites/hooks';

import { Color } from 'shared/enums';
import './reset.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      { name: 'Light', value: Color.Fill },
      { name: 'Primary', value: Color.Primary },
      { name: 'Secondary', value: Color.Secondary },
      { name: 'Dark', value: Color.Text },
    ],
  },
};

export const decorators = [
  Story => (
    <Router>
      <EnvironmentProvider>
        <AuthProvider>
          <FavoriteProvider>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
              }}
            >
              <Story />
            </div>

            {/* <GlobalStyle /> */}
          </FavoriteProvider>
        </AuthProvider>
      </EnvironmentProvider>
    </Router>
  ),
];
