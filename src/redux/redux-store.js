import {combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import todoReducer from "./todo-reducer";

const reducers = combineReducers({
    user: userReducer,
    todo: todoReducer,
});

const store = createStore(reducers);

export default store;