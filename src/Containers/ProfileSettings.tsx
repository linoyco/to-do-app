import * as React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CustomInput from '../Components/CustomInput';
import { Button } from '@material-ui/core';
import { ProfileDetails } from './ProfilePage';
import { SET_FORM_ERROR, CHECK_VALIDATION } from '../State/Actions/Profile/types';

const StyledSection: any = styled.section`
    width: 100%;
    min-height: 470px;
    max-height: 470px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const StyledDivRow: any = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledHeader: any = styled.h1`
    margin-right: auto;
    margin-left: 0px;
`;

export interface IFormErrors {
    fullNameError: string;
    emailError: string;
    genderError: string;
}

const ProfileSettings: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [fullName, setFullName] = React.useState<string>('');
    const [id, setId] = React.useState<string>('');
    const [age, setAge] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [location, setLocation] = React.useState<string>('');
    const [gender, setGender] = React.useState<string>('');

    const profileData = useSelector((state: any) => state.app.profileDetails);
    const errors = useSelector((state: any) => state.profile.formErrors);

    React.useEffect(() => {
        setFullName(profileData.fullName);
        setId(profileData.id);
        setAge(profileData.age);
        setEmail(profileData.email);
        setLocation(profileData.location);
        setGender(profileData.gender);
    }, [profileData]);

    const newProfile: ProfileDetails = {
        age: age,
        email: email,
        fullName: fullName,
        gender: gender,
        id: id,
        image: profileData.image,
        location: location
    }

    async function onSubmitClick(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: SET_FORM_ERROR, formErrors: { fullNameError: '', emailError: '', genderError: '' } });
        dispatch({ type: CHECK_VALIDATION, profileDetails: newProfile });
    };

    return (
        <StyledSection>
            <StyledHeader>Profile Settings:</StyledHeader>
            <form onSubmit={onSubmitClick}>
                <StyledDivRow>
                    <CustomInput
                        label='Full Name'
                        errorMessage={errors.fullNameError}
                        value={fullName || ''}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} />
                    <CustomInput
                        label='Id'
                        errorMessage=''
                        value={id || ''}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} />
                </StyledDivRow>
                <StyledDivRow>
                    <CustomInput
                        label='Age'
                        errorMessage=''
                        value={age || ''}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} />
                    <CustomInput
                        label='Email'
                        errorMessage={errors.emailError}
                        value={email || ''}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                </StyledDivRow>
                <StyledDivRow>
                    <CustomInput
                        label='Location'
                        errorMessage=''
                        value={location || ''}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} />
                    <CustomInput
                        label='Gender'
                        errorMessage={errors.genderError}
                        value={gender || ''}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setGender(e.target.value)} />
                </StyledDivRow>
                <Button type='submit'>Save</Button>
            </form>
        </StyledSection>
    )
};

export default ProfileSettings;
