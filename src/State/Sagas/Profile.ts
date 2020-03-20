import { take, put, call } from "redux-saga/effects";
import { DemoProfile } from '../../Lib/DemoData';
import { REQ_PROFILE_DETAILS, FETCH_PROFILE_DETAILS, CHECK_VALIDATION, SET_FORM_ERROR } from "../Actions/Profile/types";
import { ProfileDetails } from "../../Containers/Profile";
import * as commonValidator from '../../Lib/commonValidators';

export function* watchFetchProfileData() {
    yield take(REQ_PROFILE_DETAILS);
    try {
        yield put({ type: FETCH_PROFILE_DETAILS, profileDetails: DemoProfile });
    } catch (e) {
        console.log(e);
    }
}

function* checkValidationFlow(profileDetails: ProfileDetails) {
    const fullNameObj = commonValidator.userSchema.fullName.validate(profileDetails.fullName);
    const emailObj = commonValidator.userSchema.identity.validate(profileDetails.email);
    let fullNameMessage = '';
    let emailMessage = '';
    let genderMessage = '';
    let isValid = true;

    try {
        yield put({ type: SET_FORM_ERROR, formErrors: { fullNameError: '', emailError: '', genderError: '' } });

        if (typeof fullNameObj.error !== 'undefined') {
            fullNameMessage = fullNameObj.error.message;
            isValid = false;
        }
        if (typeof emailObj.error !== 'undefined') {
            emailMessage = emailObj.error.message;
            isValid = false;
        }
        if (profileDetails.gender !== 'F' && profileDetails.gender !== 'M') {
            genderMessage = 'You must select M / F';
            isValid = false;
        }
        if (!isValid) {
            yield put({ type: SET_FORM_ERROR, formErrors: { fullNameError: fullNameMessage, emailError: emailMessage, genderError: genderMessage } });
        } else {
            yield put({ type: FETCH_PROFILE_DETAILS, profileDetails: profileDetails });
            console.log('success :)');
            //will send to api the new profile.
        }
    } catch (error) {
        console.log(error.message);
    }
}

export function* watchUpdateProfile() {
    while (true) {
        const { profileDetails } = yield take(CHECK_VALIDATION);
        yield call(checkValidationFlow, profileDetails);
    }
}