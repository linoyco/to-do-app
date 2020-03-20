import * as React from 'react';
import { ProfileDetails } from '../../../Containers/Profile';
import * as ProfileActions from './types';

export function setProfileDetails(profileDetails: ProfileDetails): ProfileActions.IFetchProfileDetails {
    return {
        type: ProfileActions.FETCH_PROFILE_DETAILS,
        profileDetails: profileDetails
    }
}