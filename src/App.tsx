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
import {stateType} from "./redux/state";


type appType = {
    appState: stateType
}

function App(props: appType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <NavBar/>

                <div className='app-main-wrapper'>

                    <Route path={"/profile"} render={()=><Main state={props.appState.profilePage}/>}/>
                    <Route path={"/dialogs"} render={()=><Dialogs state={props.appState.messagesPage}/>}/>
                    <Route path={"/news"} render={()=><News/>}/>
                    <Route path={"/music"} render={()=><Music/>}/>
                    <Route path={"/setting"} render={()=><Setting/>}/>

                </div>

                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
