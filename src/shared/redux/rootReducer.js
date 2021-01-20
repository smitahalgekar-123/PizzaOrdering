import { combineReducers } from "redux";
import pizzaReducer from './pizza/pizzaReducer'

export default combineReducers({
    pizza: pizzaReducer,
});