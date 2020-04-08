//710fe00

let store = {

    _state: {
        profilePage: {
    
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 20 },
                { id: 2, message: 'It\'s my first post', likesCount: 15 }
            ],
    
            newPostText: 'Баю-баюшки-баю'
        },
    
        dialogsPage: {
            newMessageText: 'Hi',
    
            messages: [
                { message: 'Hi', id: 1 },
                { message: 'How are u', id: 2 },
                { message: 'You', id: 3 }
            ],
    
            dialogs: [
                { name: 'Фредди', id: 1, photo: 'https://lh3.googleusercontent.com/proxy/CU47Q40qa4b33d7eAo88zwwTP4ue_fkzGy_vpmKrXnKGlUlHZ_5JYcCMY1Y8nfPyyi-RG_nvZNedXDCyx2rMzoPzplXjfFDW6dqTwk2xmU1riOrfFSAe5vF4aslVonasCRV4VBShHGiQ' },
                { name: 'Ненси', id: 2, photo: 'https://cs8.pikabu.ru/post_img/2016/02/16/6/1455614024134387187.jpg' },
                { name: 'Глен', id: 3, photo: 'https://avatars.mds.yandex.net/get-zen_doc/1866022/pub_5db7caed1e8e3f00ac32a293_5db7ddb498930900b236e7d6/scale_1200' }
            ]
        }
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree () {
        console.log('State');
    },
 
    addPost () {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._state._rerenderEntireTree(this._state);
    },


    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._state._rerenderEntireTree(this._state);
    },

    sendMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        };
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._state._rerenderEntireTree(this._state);
    },

    updateNewMessageText(newMessageText) {
        this._state.dialogsPage.newMessageText = newMessageText;
        this._state._rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this._state._rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;