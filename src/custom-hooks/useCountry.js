import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../Redux/action";

const useCountry = (url) => {
  const dispatch = useDispatch();
  const country = useSelector((state) => {
    return state.country;
  });
  const fetchError = useSelector((state) => {
    return state.error;
  });
  useEffect(() => {
    dispatch(getOneCountry(country));
  }, [country, dispatch, url]);

  return [fetchError, country];
};

export default useCountry;
