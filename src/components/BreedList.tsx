import { Breed } from '../models/Breed';

import React, { } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0),
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
}));

interface IBreedListProps {
  breeds: Breed[];
}

export const BreedList = ({
  breeds
}: IBreedListProps) => {
  const classes = useStyles();

  const table = (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Name</TableCell>
            <TableCell className={classes.tableCell}>Origin</TableCell>
            <TableCell className={classes.tableCell}>Temperament</TableCell>
            <TableCell className={classes.tableCell}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {breeds.map((breed: Breed) => (
            <TableRow key={breed.id}>
              <TableCell key={breed.id} className={classes.tableCell}>{breed.name}</TableCell>
              <TableCell className={classes.tableCell}>{breed.origin}</TableCell>
              <TableCell className={classes.tableCell}>{breed.temperament}</TableCell>
              <TableCell className={classes.tableCell}>{breed.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

  return table;
};

export default BreedList;