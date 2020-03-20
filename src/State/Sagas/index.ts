import {all} from 'redux-saga/effects';
import { watchFetchProfileData, watchUpdateProfile } from './profile';

export default function* rootSaga() {
	yield all([
		watchFetchProfileData(),
		watchUpdateProfile()
	]);
}