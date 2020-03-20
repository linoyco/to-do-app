import { ProfileDetails } from "../../../Containers/Profile";
import { IFormErrors } from "../../../Containers/ProfileSettings";

export const REQ_PROFILE_DETAILS = 'REQ_PROFILE_DETAILS';
export const FETCH_PROFILE_DETAILS = 'FETCH_PROFILE_DETAILS';
export const SET_FORM_ERROR = 'SET_FORM_ERROR';
export const CHECK_VALIDATION = 'CHECK_VALIDATION';

export interface IReqProfileDetails {
    type: typeof REQ_PROFILE_DETAILS;
}

export interface IFetchProfileDetails {
    type: typeof FETCH_PROFILE_DETAILS;
    profileDetails: ProfileDetails;
}

export interface ISetFormError {
    type: typeof SET_FORM_ERROR;
    formErrors: IFormErrors;
}

export interface ICheckValidation {
    type: typeof CHECK_VALIDATION;
    profileDetails: ProfileDetails;
}

export type profileActionType = IFetchProfileDetails 
| IReqProfileDetails 
| ISetFormError
| ICheckValidation;