import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { saveState } from "./localStorage";

const storeFactory = () => {
  const middlewares = [thunk];
  const cartStorage = localStorage.getItem("cart");
  const cart = cartStorage ? JSON.parse(cartStorage) : [];

  const preloadedState = {
    cart,
    countries: [],
    country: {},
  };
  const reduxStore = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  reduxStore.subscribe(() => {
    saveState({
      cart: reduxStore.getState("cart").cart,
    });
  });
  return reduxStore;
};

export default storeFactory;
