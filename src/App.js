import React, { useEffect, } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Contants from "./Pages/Contants/Contants";


import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from "./firebase";
import Bhar from "./components/barchart";

function App() {



  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
         
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Bhar/>
            <Contants/>
            
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
