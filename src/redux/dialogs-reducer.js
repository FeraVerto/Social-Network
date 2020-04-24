const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { message: 'Hi', id: 1 },
        { message: 'How are u', id: 2 },
        { message: 'You', id: 3 }
    ],

    dialogs: [
        { name: 'Freddy', id: 1, photo: 'https://lamcdn.net/furfurmag.ru/post-cover/PYMgsmfOiI0s9C3k8dwZ8Q-default.jpg' },
        { name: 'Nancy', id: 2, photo: 'https://cs8.pikabu.ru/post_img/2016/02/16/6/1455614024134387187.jpg' },
        { name: 'Glen', id: 3, photo: 'https://avatars.mds.yandex.net/get-zen_doc/1866022/pub_5db7caed1e8e3f00ac32a293_5db7ddb498930900b236e7d6/scale_1200' }
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { message: newMessage, id: 4 }],
                newMessageText: ''
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })


export default dialogsReducer;