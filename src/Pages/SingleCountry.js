import React, { useEffect, useState } from "react";
// import CountriesTableRow from "../Table/CountriesTableRow";
import { Switch, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { changeTheme, getOneCountry, fetchError } from "../Redux/action";

const useStyles = makeStyles({
  PageTheme: {
    margin: "0.5rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
const SingleCountry = () => {

  const classes = useStyles();
  const country = useSelector((state) => {
    return state.country
  })
  const error = useSelector((state) => {
    return state.error
  })
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
   dispatch(getOneCountry(country))
   dispatch(fetchError(error))
  }, [country, dispatch, error]);

  const onSwitchChange = (event) => {
    dispatch(changeTheme(checked));
    setChecked(event.target.checked);
  };
  return (
    <>
      <div>
        <span className={classes.PageTheme}>
          <Switch onChange={onSwitchChange} />
        </span>
        {/* <CountriesTableRow /> */}
      </div>
    </>
  );
};

export default SingleCountry;
