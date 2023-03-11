import React from 'react';

type PropsType = {
    message: string
}
export const Post = (props: PropsType) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
};

