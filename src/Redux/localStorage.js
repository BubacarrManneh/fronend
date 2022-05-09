export const saveState = (state) => {
  try {
    const stringifyState = JSON.stringify(state);
    localStorage.setItem("cart", stringifyState);
  } catch{
    return undefined
  }
};
