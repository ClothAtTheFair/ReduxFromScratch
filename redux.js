const createStore = (reducer, initialState) => {
    const store = {};
    store.state = initialState;
    store.listeners = [];

    store.getState = () => store.state;

    store.subscribe = (listener) => {
        store.listeners.push(listener);
    };

    store.dispatch = (action) => {
        store.state = reducer(store.state, action);
        //listeners are functions within an array. this iterates over and executes each one on every state change
        store.listeners.forEach(listener => listener());
    };

    return store;
};