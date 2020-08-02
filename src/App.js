import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
               <Profile/>
                <p>
                    Edit and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
