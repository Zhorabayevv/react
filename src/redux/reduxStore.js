import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navBarReducer from './navBarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	navBar: navBarReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers);


export default store;