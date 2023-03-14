import React from "react";
import {friendsDataType} from "../../../redux/state";
import {FriendItem} from "./Friend/FriendItem";
import s from './Friends.module.scss'

type FriendsType = {
    dataFriends: friendsDataType[],
}

export const Friends = (props: FriendsType) => {
    return (
        <>
            <p>My Friends</p>
            <div className={s.friendsWrap}>
                {props.dataFriends.map(el => {
                    return (
                        <FriendItem name={el.name} id={el.id} avatar={el.avatar}/>
                    )
                })}
            </div>
        </>
    );
};
