import React, { useEffect } from 'react';
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

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  search: any;
};

/** Display a header at the top of the page. **/
export const SearchForm: React.FC<Props> = ({ search }) => {
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let input: any = null;
  useEffect(() => search(input.value));

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(input.value);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleKeyStroke = () => {
    search(input.value);
  };

  const form: JSX.Element = (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-search"
        placeholder="Search breeds by name or origin"
        type="search"
        variant="outlined"
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        inputRef={node => (input = node)}
        className={classes.form}
        onKeyUp={handleKeyStroke}
      />
    </form>
  );

  return form;
};

export default SearchForm;
