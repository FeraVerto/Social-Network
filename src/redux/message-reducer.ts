import { PayloadAction, createSlice } from '@reduxjs/toolkit';

//typing
export type MessageType = {
  id: number;
  name: string;
  textMessage: string;
};

type initialStateType = typeof initialState;

export const ADD_MESSAGE = 'samurai-network/message/ADD_MESSAGE';

let initialState = {
  messages: [
    { id: 1, name: 'Он', textMessage: 'Hello' },
    { id: 2, name: 'Ты', textMessage: 'Hello' },
    {
      id: 1,
      name: 'Он',
      textMessage: 'Ты такая хорошая! Ты даже лучше, чем сахар!',
    },
    { id: 2, name: 'Ты', textMessage: 'Спасибо! Приходи сегодня' },
  ] as Array<MessageType>,
};

export const messageReducer = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state: initialStateType, action: PayloadAction<string>) {
      state.messages.push({ id: 2, name: 'Я', textMessage: action.payload });
    },
  },
});

export const { addMessage } = messageReducer.actions;

const messageActionsAndReducer = { messageReducer };

export default messageActionsAndReducer;
