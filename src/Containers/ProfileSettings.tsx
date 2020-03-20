import * as React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CustomInput from '../Components/CustomInput';
import { Button } from '@material-ui/core';

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

const ProfileSettings: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [fullName, setFullName] = React.useState<string>('');
    const [id, setId] = React.useState<string>('');
    const [age, setAge] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [location, setLocation] = React.useState<string>('');
    const [gender, setGender] = React.useState<string>('');

    const profileData = useSelector((state: any) => state.app.profileDetails);

    React.useEffect(() => {
        setFullName(profileData.fullName);
        setId(profileData.id);
        setAge(profileData.age);
        setEmail(profileData.email);
        setLocation(profileData.location);
        setGender(profileData.gender);
    }, [profileData]);

    return (
        <StyledSection>
            <StyledHeader>Profile Settings:</StyledHeader>
            <form>
                <StyledDivRow>
                    <CustomInput
                        label='Full Name'
                        errorMessage=''
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
                        errorMessage=''
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
                        errorMessage=''
                        value={gender || ''}
                        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setGender(e.target.value)} />
                </StyledDivRow>
                <Button type='submit'>Save</Button>
            </form>
        </StyledSection>
    )
};

export default ProfileSettings;
