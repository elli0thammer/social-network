import React from 'react';
import s from './Dialogs.module.scss'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__items}>

                <div className={`${s.item} ${s.active}`}>Lover</div>
                <div className={s.item}>Mr. Doctor</div>
                <div className={s.item}>Commissar</div>

                <div className={s.item}>Mafia</div>
                <div className={s.item}>Don Mafia</div>
                <div className={s.item}>Peaceful resident</div>

            </div>

            <div className={s.dialogs__messages}>
                <div className={s.message}>Shall we spend tonight together?</div>
                <div className={s.message}>I have a suspicion that you are the mafioso.</div>
                <div className={s.message}>Tonight you will die!</div>
            </div>
        </div>
    );
};
