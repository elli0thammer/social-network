import React from "react";

type FriendItemType = {
    name: string,
    id: number,
    avatar: string,
}

export const FriendItem = (props: FriendItemType) => {
    return (
        <div>
            <img src={props.avatar}/>
            <p>{props.name}</p>
        </div>
    )
}
