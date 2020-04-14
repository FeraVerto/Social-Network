import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {

            posts: [
                { id: 1, message: 'Hi, how are you sleep?', likesCount: 20 },
                { id: 2, message: 'I like the night!', likesCount: 15 }
            ],

            newPostText: 'Are you sleeping?'
        },

        dialogsPage: {

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
        },

        sidebar: {}
    },

    _rerenderEntireTree() {
        console.log('State');
    },



    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._state._rerenderEntireTree = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._state._rerenderEntireTree(this._state);

    }
}


export default store;
window.store = store;