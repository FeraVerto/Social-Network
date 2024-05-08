// import { FOLLOW, SET_USERS, UNFOLLOW, usersReducer } from './users-reducer';
// import { UsersType } from './redux-store';

// let state: UsersType;

// beforeEach(() => {
//   state = {
//     users: [
//       {
//         id: 3,
//         name: 'person-3',
//         followed: false,
//         status: 'Человек-3-status',
//         photos: {
//           small: '',
//           large: '',
//         },
//       },

//       {
//         id: 4,
//         name: 'person-4',
//         followed: true,
//         status: 'Человек-3-status',
//         photos: {
//           small: '',
//           large: '',
//         },
//       },
//     ],
//     pageSize: 1,
//     totalUsersCount: 2,
//     currentPage: 3,
//     isFetching: true,
//     followingInProgress: [],
//   };
// });

// test('usersReducer with FOLLOW', () => {
//   let action = { type: FOLLOW, id: 3 } as const;
//   let newState = usersReducer(state, action);

//   expect(newState.users[0].followed).toBe(true);
// });

// test('usersReducer with UNFOLLOW', () => {
//   let action = { type: UNFOLLOW, id: 4 } as const;
//   let newState = usersReducer(state, action);

//   expect(newState.users[1].followed).toBe(false);
// });

// test('usersReducer with SET_USERS', () => {
//   let newUser = [
//     {
//       id: 10,
//       name: 'person-10',
//       followed: true,
//       status: 'Человек-10-status',
//       photos: {
//         small: '',
//         large: '',
//       },
//     },
//     {
//       id: 11,
//       name: 'person-11',
//       followed: false,
//       status: 'Человек-11-status',
//       photos: {
//         small: '',
//         large: '',
//       },
//     },
//   ];

//   let action = { type: SET_USERS, users: newUser } as const;
//   let newState = usersReducer(state, action);

//   expect(newState.users.length).toBe(2);
//   expect(newState.users[0].id).toBe(10);
//   expect(newState.users[1].id).toBe(11);
//   expect(newState.users[0].followed).toBe(true);
//   expect(newState.users[1].followed).toBe(false);
// });

// /*
// test("error", () => {
//     expect(() => {
//         usersReducer(state, {type: "FAKE"})
//     }).toThrowError();
// })*/

export {};
