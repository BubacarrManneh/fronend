import React, { useState, useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector} from "react-redux";
import { TextField, Switch, makeStyles } from "@material-ui/core";

import { addToCart, removeFromCart, changeTheme } from "../Redux/action";
import CountryTable from "../Table/CountriesTable";
import Cart from "../Components/Cart";
import { CartContext } from "../Components/CartContext";

const useStyles = makeStyles({
  HomeTheme: {
    margin: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Home = () => {
  const classes = useStyles();
  const [searchResult, setSearchResult] = useState([]);

  // Cart logics
  //  const cart = useSelector((state) => {
  //    return state.cart;
  //  });
   const countries = useSelector((state) => {
     return state.countries
   })

   const error = useSelector((state) => {
     return state.error
   })
   const cartLength = useSelector((state) => {
     return state.cart.length;
   });
    const addCountry = () => {
      dispatch(addToCart(countries));
    };
    const removeCountry = () => {
      dispatch(removeFromCart(countries));
    };

  // Search country
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  useEffect(() => {
    
    let timer;

    const search = async () => {
      await new Promise((resolve) => {
        timer = setTimeout(resolve, 1000);
      });
      const result = countries.filter((country) => {
        return country.name.toLowerCase().includes(inputValue.toLowerCase());
      });
      setSearchResult(result);
    };
    search();
    return () => {
      return clearTimeout(timer);
    };
  }, [inputValue, countries]);

  if (error) {
    return <p>Something went wrong: {error.messagee}</p>
  }

  let dataSource = [];
  if (searchResult.length > 0) {
    dataSource = searchResult;
  } else {
    dataSource = countries;
  }

  const onSwitchChange = (event) => {
    dispatch(changeTheme(checked));
    setChecked(event.target.checked);
  };

  return (
    <div>
      <span className={classes.HomeTheme}>
        <Switch onChange={onSwitchChange} />
        <TextField
          placeholder="Search Country"
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
        />
      </span>
      <CartContext.Provider value={{ cartLength, addCountry, removeCountry }}>
        <Cart />
        <CountryTable countries={dataSource} />
      </CartContext.Provider>
    </div>
  );
};

export default Home;
