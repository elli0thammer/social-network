import s from "../Dialogs.module.scss";
import React from "react";

type MessageItemType = {
    textMessage: string,
}

export const MessageItem = (props: MessageItemType) => {
    return (
        <>
            <div className={s.message}>{props.textMessage}</div>
        </>
    )
}
