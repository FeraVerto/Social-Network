// import {
//   authReducer,
//   authType,
//   SET_USER_DATA,
//   SET_USER_PHOTO,
// } from './auth-reducer';

// let state: authType;

// beforeEach(() => {
//   state = {
//     id: null,
//     email: null,
//     login: null,
//     isAuth: false,
//     photo: {
//       small: '',
//       large: '',
//     },
//   };
// });

// test('user should be set', () => {
//   let action = {
//     type: SET_USER_DATA,
//     payload: {
//       id: 14,
//       email: 'testuser@mail.com',
//       login: 'testuser',
//       isAuth: true,
//     },
//   } as const;

//   let newState = authReducer(state, action);

//   expect(newState.id).toBe(14);
//   expect(newState.email).toBe('testuser@mail.com');
//   expect(newState.login).toBe('testuser');
//   expect(newState.isAuth).toBe(true);
// });

// test('photo should be set', () => {
//   /*let action = {
//         type: SET_USER_PHOTO,
//         payload: {small: "small", large: "large"}
//     } as const

//     let newState = authReducer(state, action)

//     expect(newState.photo.small).toBe("small")
//     expect(newState.photo.large).toBe("large")*/
// });

// /*
// test("error", () => {
//     expect(() => {
//         usersReducer(state, {type: "FAKE"})
//     }).toThrowError();
// })*/

export {};
