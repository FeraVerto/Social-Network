import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


let DialogsData = [
    {name: 'Dimych', id: 1},
    {name: 'Masha', id: 2},
    {name: 'Artem', id: 3}
]

let MessageData = [
    {message: 'Hi', id: 1},
    {message: 'How are u', id: 2},
    {message: 'You', id: 3}
]


let dialogsElements = DialogsData.map( d => <DialogItem name={d.name} id={d.id} /> );

let messagesElements = MessageData.map( m =>  <Message message={m.message} id={m.id} /> );


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}


export default Dialogs;