import React from 'react';
import {Post} from "./Posts/Post";
import s from './MyPosts.module.scss'
import {postsDataType} from "../../../redux/state";

type myPostsType = {
    dataMyPosts: postsDataType[]
}

export const MyPosts = (props: myPostsType) => {

    return (
        <div className={s.myPosts}>
            <p>My wall</p>
            <textarea className={s.myPosts__textarea}/>
            <button>Add post</button>

            {
                props.dataMyPosts.map(el=>{
                    return (
                        <Post message={el.message}/>
                    )
                })
            }
        </div>
    );
};

