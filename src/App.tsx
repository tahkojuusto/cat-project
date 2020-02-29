import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import BreedList from './components/BreedList';

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
];

const App = () => (
  <>
    <BreedList breeds={BREEDS} />
  </>
);

export default App;