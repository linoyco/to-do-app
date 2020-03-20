import produce from 'immer';
import { ProfileDetails } from '../../Containers/Profile';
import { profileActionType, FETCH_PROFILE_DETAILS } from '../Actions/Profile/types';

export interface IAppState {
    profileDetails: ProfileDetails;
}

const initialState: IAppState = {
    profileDetails: {
        fullName: '',
        id: '',
        age: '',
        email: '',
        location: '',
        gender: '',
        image: ''
    }
}

export function appReducer(state: IAppState = initialState, action: profileActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_PROFILE_DETAILS:
                draft.profileDetails = action.profileDetails;                
                break;
        }
    });
}