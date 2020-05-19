const Redux = require("redux");
const {createStore, combineReducers} = Redux;

const addSubState = {
    additionResult: 0,
    subtractionResult: 0
}

const multDivState = {
    multiplicationResult: 0,
    divisionResult: 0
}
//Addition Subtraction Reducer
const addSub = (state=addSubState, action) => {
    switch (action.type) {
        case "ADD": return {
            ...state,
            additionResult : action.payload.num1 + action.payload.num2
        }
        case "SUB": return {
            ...state,
            subtractionResult : action.payload.num1 - action.payload.num2
        }    
        default: return state;
    }
}

//Multiplication Division Reducer
const multDiv = (state=multDivState, action) => {
    switch (action.type) {
        case "MULT": return {
            ...state,
            multiplicationResult : action.payload.num1 * action.payload.num2
        }
        case "DIV": return {
            ...state,
            divisionResult : action.payload.num1 / action.payload.num2
        }    
        default: return state;
    }
}

//Combine Two Reducers Above
const rootReducer = combineReducers({
    addSub,
    multDiv
})

//Store
const store = createStore(rootReducer);

//Subscription
store.subscribe(() => {
    console.log("store change: ", store.getState());
})

//Action Creator
const addition = (num1, num2) => {
    return{
        type: 'ADD',
        payload: {
            num1: num1,
            num2: num2
        }
    }
}

//Action Creator
const subtraction = (num1, num2) => {
    return{
        type: 'SUB',
        payload: {
            num1: num1,
            num2: num2
        }
    }
}

//Action Creator
const multiplication = (num1, num2) => {
    return{
        type: 'MULT',
        payload: {
            num1: num1,
            num2: num2
        }
    }
}

//Action Creator
const division = (num1, num2) => {
    return{
        type: 'DIV',
        payload: {
            num1: num1,
            num2: num2
        }
    }
}

//Dispatching Action
store.dispatch(addition(1,2))
store.dispatch(subtraction(2,1))
store.dispatch(multiplication(1,2))
store.dispatch(division(2,1))
console.log(store.getState());