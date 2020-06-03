import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} photo={d.photo} />);
    let messages = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let newMessageText = e.target.value;
        props.updateNewMessageText(newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                 <div className={s.messageAdd}>
                    <div>
                        <textarea placeholder='Enter your message' 
                                onChange={onMessageChange} 
                                className={s.addText} 
                                value={props.newMessageText} />
                    </div>
                    <div>
                        <button className={s.button} 
                                onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;
