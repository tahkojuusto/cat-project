import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles(theme => ({
  headerText: {
    marginLeft: '1rem',
  }
}));

export const Header = () => {
  const classes = useStyles();

  const header = (
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