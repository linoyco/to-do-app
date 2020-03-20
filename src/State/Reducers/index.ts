import History from 'history';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import { appReducer } from './app';

export const rootReducer = (history: History | any) => combineReducers({
	app: appReducer,
	router: connectRouter(history),
});