import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Destination from './components/Destination/Destination';
import DestinationDetail from './components/DestinationDetail/DestinationDetail';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const TravelContext = createContext();

function App() {
  const [travel, setTravel] = useState({})
  return (
    <TravelContext.Provider value={[travel, setTravel]}>
      <Router>
        <Header></Header>
        
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/destination/:travelKey'>
            <Destination></Destination>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/destinationDetails'>
            <DestinationDetail></DestinationDetail>
          </PrivateRoute>
          <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
    </TravelContext.Provider>
  );
}

export default App;
