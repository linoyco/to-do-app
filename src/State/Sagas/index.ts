import * as React from 'react';
import {all} from 'redux-saga/effects';
import { watchFetchProfileData } from './profile';

export default function* rootSaga() {
	yield all([
        watchFetchProfileData()
	]);
}