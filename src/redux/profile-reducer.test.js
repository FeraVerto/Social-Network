
const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you sleep?', likesCount: 20 },
        { id: 2, message: 'I like the night!', likesCount: 15 }
    ]
};


test('length of posts should be incremented', () => {
    let action = addPostActionCreator('Hello');

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});


test('message of new post should be correct', () => {
    let action = addPostActionCreator('Hello');

    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe("Hello");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(0);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(0);
});

//В двух последних тестах какая-то шляпа, если честно


