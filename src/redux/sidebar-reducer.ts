import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  friends: [
    {
      id: 1,
      name: 'Друг-1',
      avatar:
        'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png',
    },
    {
      id: 2,
      name: 'Друг-2',
      avatar:
        'https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png',
    },
    {
      id: 3,
      name: 'Друг-3',
      avatar: 'https://bugaga.ru/uploads/posts/2019-10/1569918369_lica-3.jpg',
    },

    {
      id: 4,
      name: 'Друг-1',
      avatar:
        'https://the-steppe.com/new_loc_2/files/Molya/fake-person-twitter-tesla.webp',
    },
    {
      id: 5,
      name: 'Друг-2',
      avatar: 'https://texterra.ru/upload/img/10-08-2019/1.jpg',
    },
    {
      id: 6,
      name: 'Друг-3',
      avatar:
        'https://cs9.pikabu.ru/post_img/big/2019/05/12/5/1557646415132392289.png',
    },
  ],
};

export const sidebarReducer = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
});

const sidebarActionsAndReducer = { sidebarReducer };

export default sidebarActionsAndReducer;
