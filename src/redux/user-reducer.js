let initialState = {
    fullName: 'Nikita Denisov',
    messageText: 'Hi, myyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy name is Nikita, and i\'d like to show some presentation about me. There is some of my advantages, check it out!',
    messageTime: '23:04',
    advantages: [
        {advantage: 'I', className: 'advantages__item', id: 1},
        {advantage: 'don\'t', className: 'advantages__item advantages__item--super', id: 2},
        {advantage: 'know', className: 'advantages__item', id: 3},
        {advantage: 'I\'m', className: 'advantages__item', id: 4},
        {advantage: 'too', className: 'advantages__item', id: 5},
        {advantage: 'shy', className: 'advantages__item', id: 6},
    ]
};

const userReducer = (state = initialState, action) => {
    return state;
};

export default userReducer;