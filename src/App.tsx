import React, { useState } from 'react';
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

  const fetchBreeds = async (filter: ModelBreedFilterInput | null) => {
    try {
      let res = null;

      if (filter) {
        res = await API.graphql(graphqlOperation(listBreeds, { filter }));
      } else {
        res = await API.graphql(graphqlOperation(listBreeds));
      }

      setBreeds(res.data.listBreeds.items);
    } catch (ex) {
      console.log(ex);
    }
  };

  const search = (value: string) => {
    let filter: ModelBreedFilterInput | null = null;

    if (value) {
      filter = {
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
      };
    }

    fetchBreeds(filter);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchForm search={search} />
      <BreedList breeds={breeds} />
    </ThemeProvider>
  );
};

export default App;
