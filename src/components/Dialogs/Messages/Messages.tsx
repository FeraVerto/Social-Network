import React from 'react';
import s from './Messages.module.sass';
import { NavLink } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { MessageType } from '../../../redux/message-reducer';
import { Button } from '../../common/Button/Button';

type MessagesType = {
  messages: Array<MessageType>;
  addMessage: (newMessageText: string) => void;
};

const Messages: React.FC<MessagesType> = ({ messages, addMessage }) => {
  let newMessages = messages.map((m) => (
    <div key={m.id} className={s.dialog_body}>
      <div className={m.id === 1 ? s.message_one : ''}>
        <div>{m.id === 1 ? m.name : null}</div>
        <div>{m.id === 1 ? m.textMessage : null}</div>
      </div>
      <div className={m.id === 2 ? s.message_two : ''}>
        <div>{m.id === 2 ? m.name : null}</div>
        <div>{m.id === 2 ? m.textMessage : null}</div>
      </div>
    </div>
  ));

  const onSubmit = (formData: MessagesPropsFormType) => {
    addMessage(formData.newMessageText);
  };

  return (
    <div className={s.dialog_window}>
      <div className={s.dialog_header}>
        <NavLink to="/dialogs">
          <NavLink className={s.button} to={'/dialogs'}>
            Exit
          </NavLink>
        </NavLink>
        <div>Avatar + name</div>
      </div>
      {newMessages}
      <MessagesReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Messages;

export type MessagesPropsFormType = {
  newMessageText: string;
};

export const MessagesForm: React.FC<
  InjectedFormProps<MessagesPropsFormType>
> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.dialog_footer}>
        <Field
          component={Textarea}
          name={'newMessageText'}
          placeholder={'fake layout'}
          className={s.dialog_footer_textarea}
        />
        <Button style={s.button_message}>Send</Button>
      </div>
    </form>
  );
};

export const MessagesReduxForm = reduxForm<MessagesPropsFormType>({
  form: 'newMessageText',
})(MessagesForm);
