import React from 'react';
import s from './Post.module.scss'

type PropsType = {
    message: string
}
export const Post = (props: PropsType) => {
    return (
        <div className={s.post}>
            <p>{props.message}</p>
        </div>
    );
};

