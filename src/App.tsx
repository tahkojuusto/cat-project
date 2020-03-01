import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import BreedList from './components/BreedList';
import Header from './components/Header';

Amplify.configure(awsconfig);

const BREEDS = [
  {
    id: '1',
    name: 'Abyssinian',
    origin: 'Ethiopia',
    temperament: 'Skittish',
    description: 'Abyssinians are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook or cranny unexplored.'
  },
  {
    id: '2',
    name: 'Scottish Fold',
    origin: 'Scotland',
    temperament: 'Friendly',
    description: 'The smart and friendly Scottish Fold loves playing with challenging, puzzling toys to test her intelligence.'
  },
  {
    id: '3',
    name: 'Himalayan',
    origin: 'Nepal',
    temperament: 'Outgoing',
    description: 'The Himalayan Cat is a sweet and mild-tempered feline. She’s affectionate but selective.'
  },
  {
    id: '4',
    name: 'Bengal',
    origin: 'Asia',
    temperament: 'Outgoing',
    description: 'This docile house cat has what some would call a rambunctious personality. Bengal cats are playful and love to chase, climb, investigate and be part of the action.'
  },
  {
    id: '5',
    name: 'Persian',
    origin: 'Iran',
    temperament: 'Skillish',
    description: 'The docile Persian is a quiet feline who enjoys a calm and relaxing environment.'
  },
  {
    id: '6',
    name: 'Turkish Van',
    origin: 'Turkey',
    temperament: 'Friendly',
    description: 'A slow-maturing breed, the Turkish Van takes three to five years to reach maturity.'
  },
];

const theme = createMuiTheme({
  palette: {
    primary: { main: '#89FC00' },
    secondary: { main: '#F5B700' },
    contrastThreshold: 3,
  },
  shape: {
    borderRadius: 0,
  }
});

const App = () => {
  const container = (
    <ThemeProvider theme={theme}>
      <Header />
      <BreedList filter={{}} />
    </ThemeProvider>
  );

  return container;
};

export default App;