import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    debugger;
    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} photo={d.photo} />);
    let messages = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    //let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let newMessageText = e.target.value;
        let action = updateNewMessageTextActionCreator(newMessageText);
        props.dispatch(action);

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
                                //ref={newMessage} 
                                value={props.state.newMessageText} />
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
