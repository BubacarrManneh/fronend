import React from 'react'
import { TableRow, TableCell} from '@material-ui/core'
import Buttons from '../components/Button'
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../Redux/action'

function CountriesTableRow({countries} = "country") {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme);
    const useStyles = makeStyles({
      tableCell: {
        color: theme === "dark" ? "white" : "black",
        width: "15vw",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1rem",
      },
    });
    const classes = useStyles()

  const addToFav = () => {
    dispatch(addToCart())
  }
  return (
    <>
      {countries.map((country) => (
        <TableRow>
          <TableCell>
            <img src={country.flags.png} alt="flag" />
          </TableCell>
          <TableCell key={country.id} className={classes.tableCell} align="center">
             {country.name}
          </TableCell>
          <TableCell
            className={classes.tableCell}
            align="center"
          >
            {country.alpha3Code}
          </TableCell>
          <TableCell className={classes.tableCell} align="center">
            {country.population}
          </TableCell>
          <TableCell className={classes.tableCell} align="center">
            {country.region}
          </TableCell>
          <TableCell className={classes.tableCell} align="center">
            {country.languages[0].name}
          </TableCell>
          <TableCell>{<Buttons onClick={addToFav} countries={country}/>}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default CountriesTableRow