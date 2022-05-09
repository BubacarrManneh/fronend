
export const initialState = {
  cart: [],
  country: {},
  countries: [],
  error: null,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "FETCH_COUNTRIES_SUCCESS":
        const countriesdata = action.payload;
        return {
          ...state,
          countries: countriesdata,
        };
      case "FETCH_ONE_COUNTRY_SUCCESS":
        const countryData = action.payload;
        return {
          ...state,
          country: countryData,
        };
      case "ADD_TO_FAVOURITE":
        const countryName = action.payload;
      
        return {
          ...state,
          cart: [...state.cart, countryName]
        };
      case "REMOVE_FROM_FAVOURITE":
        const removeCountry = action.payload;
        const newCart = state.cart.filter((country) => {
          return country.name !== removeCountry.name;
        });
        return {
          ...state,
          cart: newCart,
        };
      case "FETCH_ERROR":
        const errorFromPayload = action.payload;
        return {
          ...state,
          country: errorFromPayload,
        };
      case "CHANGE_THEME":
        if (state.theme === "dark") {
          return {
            ...state,
            theme: "light",
          };
        } else {
          return {
            ...state,
            theme: "dark",
          };
        }
      default:
        return state;
    }
}
