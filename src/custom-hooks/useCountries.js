import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/action";

const useCountries = (url) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => {
    return state.countries;
  });
  const fetchError = useSelector((state) => {
    return state.error;
  });
  useEffect(() => {
    dispatch(getCountries);
  }, [dispatch, url]);

  return [fetchError, countries];
};

export default useCountries;
