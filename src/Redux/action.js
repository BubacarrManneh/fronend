
export const getCountries = () => {
    return async (dispatch, getState) => {
        try{
            const data = await fetch("https://restcountries.com/v2/all");
            const countriesList = await data.json();
             console.log("Countries", countriesList);
            dispatch(fetchCountriesSuccess(countriesList))
        }catch(error){
            dispatch(fetchError(error))
        } 
    } 
}

export const fetchCountriesSuccess = data => {
    return {
        type: 'FETCH_COUNTRIES_SUCCESS',
        payload: data,
    }
}

export const getOneCountry = countryName => {
    return async(dispatch, gestState) => {
        try{
            const data = await fetch(
              `https://restcountries.com/v2/name/${countryName}`
            );
            const country = data.json();
             console.log("oneCountry", country);
            dispatch(fetchOneCountrySuccess(country))
        }catch(error){
            dispatch(fetchError(error))
        }  
    }
}

export const fetchOneCountrySuccess = country=> {
    return {
      type: 'FETCH_ONE_COUNTRY_SUCCESS',
      payload: country,
    };
}
export const fetchError = error => {
    return {
        type: 'FETCH_ERROR',
        payload: error,
    }
}

export const changeTheme = () => {
    return {
      type: 'CHANGE_THEME',
    }
  }
  export const addToCart = (data) => {
    return {
      type: 'ADD_TO_FAVOURITE',
      payload: data,
    };
  };
  export const removeFromCart = (data) => {
    return {
      type: 'REMOVE_FROM_FAVOURITE',
      payload: data,
    };
  };