import { makeStyles } from "@material-ui/core";
import React, { createContext } from "react";
import { useSelector } from "react-redux";

export const StylesProvider = props => {
    const StylesContext = createContext()
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
      header: {
        margin: "0.5rem",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    });
  const classes = useStyles()

  return (
      <StylesContext.Provider value={classes}>
          {props.children}
      </StylesContext.Provider>
  )
}