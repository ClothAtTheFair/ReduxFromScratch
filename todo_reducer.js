const getInitialState = () => ({
    todoList: [],
});

const reducer = (prevState = getInitialState(), action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            const nextState = {
                todoList: [
                    ...prevState.todoList,
                    action.text,
                ],
            };
            return nextState;
        default:
            return prevState;
    };
}