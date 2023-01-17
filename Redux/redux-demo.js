const redux = require('redux')

//The reduces function receives two inputs:- Old state and diapatched action which returns new State object as Output.
//Should be a pure function, not http or modify local storage.
const countReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state
}

//create a store
const store = redux.createStore(countReducer);

//subscriber

const counterSubscriber = () => {
    const latestState = store.getState();  // gets the latest state snapshot
    console.log(latestState);
}

store.subscribe(counterSubscriber); //Redux to know about the subscriber to make the function execute.

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });