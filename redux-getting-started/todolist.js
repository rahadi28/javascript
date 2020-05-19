const Redux = require('redux');
const {createStore, combineReducers} = Redux;

//Reducer
const taskReducer = (task = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...task, {title: action.payload.title, desc: action.payload.desc}];
        case 'DONE_TASK':
            return task.filter((note, index) => index !== action.payload.id);
        default:
            return task;
    }
}

//Combine Reducers
const reducers = combineReducers({
    task: taskReducer
});

//Store
const task = createStore(reducers);

//Subscription
task.subscribe(() => {
    console.log("task change: ", task.getState());
})

//Action Creator
const addTask = (title, desc) => {
    return{
        type: 'ADD_TASK',
        payload: {
            title: title, desc: desc
        }
    }
}

//Action Creator
const doneTask = (id) => {
    return{
        type: 'DONE_TASK',
        payload: {
            id: id
        }
    }
}

//Dispatching Action
task.dispatch(addTask('Redux', 'Learn redux from basic'));
task.dispatch(addTask('React-Redux', 'Implement redux on react'));
console.log(task.getState());

task.dispatch(doneTask(0));
console.log(task.getState());