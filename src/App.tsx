/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core';

import { ModelBreedFilterInput } from './API';
import { listBreeds } from './graphql/queries';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import BreedList from './components/BreedList';

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

const App: React.FC = () => {
  const [breeds, setBreeds] = useState([]);
  const [filter, setFilter]: any = useState(null);

  const fetchBreeds = async (filter: ModelBreedFilterInput | null): Promise<void> => {
    try {
      let response = null;

      if (filter) {
        response = await API.graphql(graphqlOperation(listBreeds, { filter }));
      } else {
        response = await API.graphql(graphqlOperation(listBreeds));
      }

      setBreeds(response.data.listBreeds.items);
    } catch (ex) {
      console.log(ex);
    }
  };

  const getFilterObject = (value: string): object => ({
    or: [
      {
        name: {
          contains: value,
        },
      },
      {
        origin: {
          contains: value,
        },
      },
    ],
  });

  const search = (value: string): void => {
    if (value) {
      const filter: ModelBreedFilterInput = getFilterObject(value);
      setFilter(filter);
      return;
    }

    setFilter(null);
  };

  useEffect(() => {
    fetchBreeds(filter);
  }, [filter]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchForm search={search} />
      <BreedList breeds={breeds} />
    </ThemeProvider>
  );
};

export default App;
