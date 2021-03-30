import React from 'react';
import './App.css';
import logo from './images/featured_image_no_alpha.png';
import Login from './modules/login/Login';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Orders from './modules/orders/Orders';
import Homepage from "./modules/homepage/Homepage";
import Header from './modules/header/Header';
function App() {
    return (
        <Router>
            <Header />
            <Route path='/' exact>
                <Homepage />
            </Route>
            <Route path='/login'>
                <Login name="michael_me" />
            </Route>
            <Route path='/orders'>
                <Orders />
            </Route>
        </Router>

    );
}

export default App;
