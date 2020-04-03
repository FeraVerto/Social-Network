export let rerenderEntireTree = () => {
    console.log('State');
}

let state = {
    profilePage: {

        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 20 },
            { id: 2, message: 'It\'s my first post', likesCount: 15 }
        ],

        newPostText: 'Переходи  темную сторону'
    },

    dialogsPage: {
        newMessageText: 'Hi',

        messages: [
            { message: 'Hi', id: 1 },
            { message: 'How are u', id: 2 },
            { message: 'You', id: 3 }
        ],

        dialogs: [
            { name: 'Оби Ван', id: 1, photo: 'https://vignette.wikia.nocookie.net/ru.starwars/images/3/3b/%D0%9E%D0%B1%D0%B8-%D0%92%D0%B0%D0%BD%2C_%D0%9C%D0%B5%D1%81%D1%82%D1%8C_%D1%81%D0%B8%D1%82%D1%85%D0%BE%D0%B2.png/revision/latest?cb=20161213163443' },
            { name: 'Лея', id: 2, photo: 'https://vokrug.tv/pic/news/2/0/c/b/20cbb32f665384fab9bdfb6651e1e00f.jpg' },
            { name: 'Чуи', id: 3, photo: 'https://vignette.wikia.nocookie.net/ru.starwars/images/7/73/Chewbaccaheadshot.jpg/revision/latest?cb=20140606104609' }
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}


export const sendMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;