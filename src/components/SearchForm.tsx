/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1rem',
  },
  form: {
    backgroundColor: 'white',
    minWidth: 330,
  },
}));

type SearchFunction = (searchValue: string) => void;

type Props = {
  search: SearchFunction;
};

/** Search form to find breeds by name and origin. Search will be triggered by key up and submit events. **/
export const SearchForm: React.FC<Props> = ({ search }) => {
  const classes = useStyles();

  // Form input value to be used in search.
  let input: any = null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    search(input.value);
  };

  // Key up event will trigger a search.
  const handleKeyStroke = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    search(input.value);
  };

  const form: JSX.Element = (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-search"
        placeholder="Search breeds by name or origin"
        type="search"
        variant="outlined"
        inputRef={node => (input = node)}
        className={classes.form}
        onKeyUp={handleKeyStroke}
      />
    </form>
  );

  return form;
};

export default SearchForm;
function newFunction() {
  'lodash.debounce';
}
