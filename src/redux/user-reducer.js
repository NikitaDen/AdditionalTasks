let initialState = {
    fullName: 'Nikita Denisov',
    messageText: 'Hi, my name is Nikita, and i\'d like to show some presentation about me. There is some of my advantages, check it out!',
    messageTime: '23:04',
    advantages: [
        {advantage: 'Tall', className: 'advantages__item', id: 1},
        {advantage: 'Medium', className: 'advantages__item advantages__item--super', id: 2},
        {advantage: 'Short', className: 'advantages__item', id: 3},
    ]
};

const userReducer = (state = initialState, action) => {
    return state;
};

export default userReducer;