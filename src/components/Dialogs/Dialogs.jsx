import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} photo={d.photo} />);
    let messages = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <div>
                        <textarea onChange={onMessageChange} className={s.addText} ref={newMessage} value={props.state.newMessageText} />
                    </div>
                    <div>
                        <button className={s.button} onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;