import { ProfileDetails } from "../../../Containers/Profile";

export const REQ_PROFILE_DETAILS = 'REQ_PROFILE_DETAILS';
export const FETCH_PROFILE_DETAILS = 'FETCH_PROFILE_DETAILS';

export interface IReqProfileDetails {
    type: typeof REQ_PROFILE_DETAILS;
}

export interface IFetchProfileDetails {
    type: typeof FETCH_PROFILE_DETAILS;
    profileDetails: ProfileDetails;
}

export type profileActionType = IFetchProfileDetails | IReqProfileDetails;