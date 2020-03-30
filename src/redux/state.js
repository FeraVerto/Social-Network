
let state = {
    profilePage: {

        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 20 },
            { id: 2, message: 'It\'s my first post', likesCount: 15 }
        ]
    },

    dialogsPage: {
        messages: [
            { message: 'Hi', id: 1 },
            { message: 'How are u', id: 2 },
            { message: 'You', id: 3 }
        ],

        dialogs: [
            { name: 'Dimych', id: 1 },
            { name: 'Masha', id: 2 },
            { name: 'Artem', id: 3 }
        ]
    }
}

export default state;