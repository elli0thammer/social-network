import React from 'react';
import s from './Main.module.scss'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {friendsDataType, postsDataType} from "../../redux/state";
import {Friends} from "./Friends/Friends";

type mainType = {
    state: {
        postsData: postsDataType[],
        friendsData: friendsDataType[],
    }
}

export const Main = (props: mainType) => {
    return (
        <main className={s.main}>
            <ProfileInfo/>

            <Friends dataFriends={props.state.friendsData}/>

            <MyPosts dataMyPosts={props.state.postsData}/>
        </main>
    );
};
