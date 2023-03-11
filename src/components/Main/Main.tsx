import React from 'react';
import s from './Main.module.scss'
import {MyWall} from "./MyWall/MyWall";

export const Main = () => {
    return (
        <main className={s.main}>
            <div>
                <img src='#'/>
                <p>I like to eat dumplings and play genshin</p>
            </div>

            <MyWall/>

        </main>
    );
};
