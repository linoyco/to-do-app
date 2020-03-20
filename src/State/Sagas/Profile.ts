import { take, put } from "redux-saga/effects";
import { DemoProfile } from '../../Lib/DemoData';
import { REQ_PROFILE_DETAILS, FETCH_PROFILE_DETAILS } from "../Actions/Profile/types";

export function* watchFetchProfileData() {
    yield take(REQ_PROFILE_DETAILS);
    try {
        yield put({ type: FETCH_PROFILE_DETAILS, profileDetails: DemoProfile });
    } catch (e) {
        console.log(e);
    }
}