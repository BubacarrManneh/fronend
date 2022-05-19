import React from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from 'react-redux'

import CountriesTableHead from './CountriesTableHead'
import CountriesTableRow from './CountriesTableRow'

function CountriesTable({ countries}) {
   const theme = useSelector((state) => state.theme);
   const useStyles = makeStyles({
     TableContainer: {
       background: theme === "dark" ? "black" : "",
       color: theme === "light" ? "white" : "black",
     },
   });
   const classes = useStyles();
  return (
    <TableContainer className={classes.TableContainer}>
      <Table>
        <CountriesTableHead />
        <TableBody>
          <CountriesTableRow countries={countries}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CountriesTable