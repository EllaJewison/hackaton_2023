import React, { useContext, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();


export function useApp() {
  return useContext(AppContext);
}


export function AppContextProvider({ children }) {

  const [culture, setculture] = useState({
    culture: "",
  });
  const [suggest, setsuggest] = useState([]);

  const [books, setbooks] = useState([])

  const getAllBooks = async (e) => {
    try {
      const res = await axios.get("http://localhost:8080/");
      console.log(res.data);
    } catch (err) {
      console.log("All Books", err);
    }
  };

  const fetchSignUp = async (signupInfo) => {
    try {
      const res = await axios.post("http://localhost:8080/signup", signupInfo);
      console.log(res.data);
      if (res.data === true) {
        console.log("Login Success");
        return true;
      }else {
        return false;
      }
      
    } catch (err) {
      console.log(err);
    }
  };


  const hanleSuggest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/suggest", culture, suggest);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLogin = async (loginInfo) => {
    try {
      const res = await axios.post("http://localhost:8080/login", loginInfo);
      console.log(res.data);
      
        return true;
      
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    fetchSignUp,
    fetchLogin,
    getAllBooks,
    hanleSuggest,
    setsuggest,
    setculture,
    setbooks,
    books
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}




