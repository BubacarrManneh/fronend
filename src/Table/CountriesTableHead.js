import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

function CountriesTableHead() {
  const theme = useSelector((state) => state.theme);
  const useStyles = makeStyles({
    tableCell: {
      background: theme === "dark" ? "black" : "#1E90FF",
      color: theme === "dark" ? "white" : "black",
      width: "15vw",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1rem",
    },
  });
  const classes = useStyles()

  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableCell}>FLAG</TableCell>
        <TableCell className={classes.tableCell} align="center">
          NAME
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          ALPHACODE
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          POPULATION
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          REGION
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          LANGUAGES
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          Buy
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default CountriesTableHead;
