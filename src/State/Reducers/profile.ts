import produce from 'immer';
import { profileActionType, SET_FORM_ERROR } from '../Actions/Profile/types';
import { IFormErrors } from '../../Containers/ProfileSettings';

export interface IAppState {
    formErrors: IFormErrors;
}

const initialState: IAppState = {
    formErrors: {
        emailError: '',
        fullNameError: '',
        genderError: ''
    }
}

export function profileReducer(state: IAppState = initialState, action: profileActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SET_FORM_ERROR:
                draft.formErrors = action.formErrors;
                break;
        }
    });
}