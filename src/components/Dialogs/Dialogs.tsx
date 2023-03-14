import React from 'react';
import s from './Dialogs.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsDataType, messagesDataType} from "../../redux/state";

type dialogsType = {
    state: {
        dialogsData: dialogsDataType[],
        messagesData: messagesDataType[],
    }
}

export const Dialogs = (props: dialogsType) => {

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__items}>
                {
                    props.state.dialogsData.map(el=>{
                        return (
                            <DialogItem name={el.name} id={el.id} avatar={el.avatar}/>
                        )
                    })
                }
            </div>

            <div className={s.dialogs__messages}>
                {
                    props.state.messagesData.map(el=>{
                        return (
                            <MessageItem textMessage={el.message}/>
                        )
                    })
                }
            </div>
        </div>
    );
};
