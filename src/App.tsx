import React from 'react';
import './App.css';
import logo from './images/featured_image_no_alpha.png';
import Login from './modules/login/Login';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Login name="michael_me" />
                
            </header>
        </div>
    );
}

export default App;
