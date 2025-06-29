/*
import { applyMiddleware, createStore } from 'redux'
import  thunk  from 'redux-thunk';

// Using Thunk
const FETCH_TASK = "task/fetch";
const initialState = {
    task:[],
};
// Reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASK:
            return {
                ...state,
                task: [...state.task, ...action.payload], // spread payload to avoid nesting
            };
        default:
            return state;
    }
};
export const FetchTask = () => {
    return async(dispatch) => {
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            const task = await res.json();
            dispatch({type:FETCH_TASK, payload:task})
        }catch(error)
        {
            console.log(error)
        }

    }
}

export const store = createStore(taskReducer, applyMiddleware(thunk));*/
