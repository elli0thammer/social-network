import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <NavBar/>

                <div className='app-main-wrapper'>

                    <Route path={"/profile"} component={Main}/>
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/setting"} component={Setting}/>

                </div>

                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
