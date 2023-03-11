import React from 'react';
import s from './NavBar.module.scss'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.nav__item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.nav__item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.nav__item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.nav__item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.nav__item}><NavLink to="/setting" activeClassName={s.active}>Setting</NavLink></li>
            </ul>
        </nav>
    );
};

