import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';

import { Breed } from '../models/Breed';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'auto',
    margin: '1em',
  },
  table: {
    minWidth: 200,
    margin: 5,
  },
  tableCell: {
    paddingRight: 5,
    paddingLeft: 6,
  },
}));

type Props = {
  breeds: any;
};

/** Fetch and display a list of cat breeds. Takes GraphQL filter object
 * as props in order to filter the list.
 */
export const BreedList: React.FC<Props> = ({ breeds }) => {
  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const table: JSX.Element = (
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
          {breeds.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((breed: Breed) => (
            <TableRow key={breed.id}>
              <TableCell key={breed.id} className={classes.tableCell}>
                {breed.name}
              </TableCell>
              <TableCell className={classes.tableCell}>{breed.origin}</TableCell>
              <TableCell className={classes.tableCell}>{breed.temperament}</TableCell>
              <TableCell className={classes.tableCell}>{breed.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={breeds.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );

  return table;
};

export default BreedList;
