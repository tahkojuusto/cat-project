import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles(() => ({
  headerText: {
    marginLeft: '1rem',
  },
}));

/** Display a header at the top of the page. **/
export const Header: React.FC = () => {
  const classes = useStyles();

  const header: JSX.Element = (
    <AppBar position="static">
      <Toolbar variant="dense">
        <PetsIcon />
        <Typography variant="h6" className={classes.headerText}>
          Cat Project
        </Typography>
      </Toolbar>
    </AppBar>
  );

  return header;
};

export default Header;
