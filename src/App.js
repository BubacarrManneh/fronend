import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import "./App.css";
import Home from './Pages/Home';
import { getCountries, getOneCountry } from './Redux/action'

function App() {
const dispatch = useDispatch();
 useEffect(data => {
   dispatch(getCountries());
   dispatch(getOneCountry('Netherlands'));
 },[dispatch])
  return (
      <div className="App">
       <Home />
      </div>
  );
}

export default App;