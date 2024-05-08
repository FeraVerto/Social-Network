// import { MessagesPageType } from './redux-store';
// import { ADD_MESSAGE, messageReducer } from './message-reducer';

// let state: MessagesPageType;

// beforeEach(() => {
//   state = {
//     messages: [
//       { id: 1, name: 'Он', textMessage: 'Hello' },
//       { id: 2, name: 'Ты', textMessage: 'Hello' },
//       {
//         id: 1,
//         name: 'Он',
//         textMessage: 'Ты такая хорошая! Ты даже лучше, чем сахар!',
//       },
//       { id: 2, name: 'Ты', textMessage: 'Спасибо! Приходи сегодня' },
//     ],
//   };
// });

// test('messageReducer with ADD_MESSAGE', () => {
//   let action = { type: ADD_MESSAGE, newMessageText: 'Все готово' } as const;
//   let newState = messageReducer(state, action);

//   expect(newState.messages[4].textMessage).toBe('Все готово');
// });

// /*
// test("error", () => {
//     expect(() => {
//         usersReducer(state, {type: "FAKE"})
//     }).toThrowError();
// })*/

export {};
