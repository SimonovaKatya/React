import React, {useState} from 'react';
import './App.css';
import Header from "./COMPONENTS/Header/Header";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Profile from "./COMPONENTS/Profile/Profile";
import Dialogs from "./COMPONENTS/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./COMPONENTS/News/News";
import Music from "./COMPONENTS/Music/Music";
import Settings from "./COMPONENTS/Settings/Settings";


/*const L = [
    {name: 'mark', id: 1},
    {name: 'katy', id: 3},
    {name: 'petia', id: 4},
    {name: 'max', id: 7},
]*/

const App = () => {
    /* const [isRed, setIsRed] = useState(true)*/

    return (
        <BrowserRouter>


            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*  <NavBar1 list={L} isRed={isRed}/>*/}
                {/*   <button onClick={() => setIsRed(!isRed)}>сменить цвет</button>*/}
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

/*const returnColor = (isRed) => isRed ? {background: "red"} : {background: "blue"}

const NavBar1 = ({list, isRed}) => [list.filter(item => item.name !== 'petia').map(item => <div style={returnColor(isRed)} key={item.id}>{item.name}</div>)]*/


export default App;
