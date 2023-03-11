import React from 'react';
import {Post} from "./Posts/Post";

export const MyWall = () => {
    return (
        <div>
            <p>My wall</p>
            <textarea/>
            <button>Add post</button>

            <Post message={'I think the jack-russell breed is the best. What do you think, bro?'}/>
            <Post message={'What is the best build for Bennett?'}/>
        </div>
    );
};

