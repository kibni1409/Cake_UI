import OrderReducer from "./OrderReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

let reducers = combineReducers({
    OrderPage: OrderReducer,
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));


export default store;