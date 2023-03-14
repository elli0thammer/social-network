import s from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    name: string,
    id: number,
    avatar: string,
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img src={props.avatar}/>
            <NavLink activeClassName={s.active} to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
