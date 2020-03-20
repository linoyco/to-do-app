import History from 'history';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import { appReducer } from './app';
import { profileReducer } from './profile';

export const rootReducer = (history: History | any) => combineReducers({
	app: appReducer,
	profile: profileReducer,
	router: connectRouter(history),
});