import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Человек-1',
      lastMessage: 'Привет!',
      avatar:
        'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png',
    },
    {
      id: 2,
      name: 'Человек-2',
      lastMessage:
        'Хочу предложить тебе новый способ заработать, сидя на диване',
      avatar:
        'https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png',
    },
    {
      id: 3,
      name: 'Человек-3',
      lastMessage: 'Скинь фотки',
      avatar: 'https://bugaga.ru/uploads/posts/2019-10/1569918369_lica-3.jpg',
    },
    {
      id: 4,
      name: 'Человек-4',
      lastMessage: 'Сотку когда вернешь?',
      avatar:
        'https://the-steppe.com/new_loc_2/files/Molya/fake-person-twitter-tesla.webp',
    },
    {
      id: 5,
      name: 'Человек-5',
      lastMessage: 'Жрать охота',
      avatar: 'https://texterra.ru/upload/img/10-08-2019/1.jpg',
    },
  ],
};

export const dialogsReducer = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {},
});

const dialogsActionsAndReducer = { dialogsReducer };

export default dialogsActionsAndReducer;
