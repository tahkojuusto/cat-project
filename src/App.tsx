import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core';

import BreedList from './components/BreedList';
import Header from './components/Header';

Amplify.configure(awsconfig);

const theme: Theme = createMuiTheme({
  palette: {
    primary: { main: '#89FC00' },
    secondary: { main: '#F5B700' },
    contrastThreshold: 3,
  },
  shape: {
    borderRadius: 0,
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <BreedList filter={{}} />
  </ThemeProvider>
);

export default App;
