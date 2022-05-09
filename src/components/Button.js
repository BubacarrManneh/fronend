import React, { useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { CartContext } from './CartContext';

const useStyles = makeStyles({
  tableCell: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  Btn: {
    background: "green",
    outline: "none",
    border: "none",
    borderRadius: "0.5rem",
    width: "4rem",
    padding: "0.4rem",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
});

const Button = ({country, countries}) => {
  const classes = useStyles();

  const { addCountry } = useContext(CartContext);

  return (
    <>
      <button
        className={classes.Btn}
        countries={countries}
        country={country}
        onClick={addCountry}
      >
        Add
      </button>
    </>
  );
}

export default Button