import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let dialogs = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} photo={d.photo} />
  ));
  let messages = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>
        <div>{messages}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form className={s.messageAdd} onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageText"
          placeholder="Enter your message"
          validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button className={s.button}> Send </button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);

export default Dialogs;
