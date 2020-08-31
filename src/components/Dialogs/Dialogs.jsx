import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} photo={d.photo} />);
    let messages = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);

    
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}


const addMessageForm = (props) => {

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let newMessageText = e.target.value;
        props.updateNewMessageText(newMessageText);
    }
    return (
        <form className={s.messageAdd} onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageText' placeholder='Enter your message' />
            </div>
            <div>
                <button className={s.button}> Send </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogaddMessageForm' })(addMessageForm);



export default Dialogs;
