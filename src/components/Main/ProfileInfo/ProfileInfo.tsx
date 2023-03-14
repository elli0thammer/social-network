import React from "react";
import s from './ProfuleInfo.module.scss'

export const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <img src='#'/>
            <div className={s.profile__wrap}>
                <img src='#'/>
                <p>I like to eat dumplings and play genshin</p>
            </div>
        </div>
    );
};
