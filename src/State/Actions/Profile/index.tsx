import { ProfileDetails } from '../../../Containers/ProfilePage';
import * as ProfileActions from './types';

export function setProfileDetails(profileDetails: ProfileDetails): ProfileActions.IFetchProfileDetails {
    return {
        type: ProfileActions.FETCH_PROFILE_DETAILS,
        profileDetails: profileDetails
    }
}