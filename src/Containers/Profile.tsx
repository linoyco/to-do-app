import * as React from 'react';
import { Settings } from '@material-ui/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import * as Routes from '../Lib/Routes';
import CustomSpan from '../Components/CustomSpan';

const StyledSection: any = styled.section`
    width: 100%;
    min-height: 470px;
    max-height: 470px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const StyledFirstDiv: any = styled.div`
    display: flex;
`;

const StyledNavButton: any = styled(NavLink)`
    margin-right: 0px;
    margin-left: auto;
    margin-top: 5px;
`;

const StyledSettings: any = styled(Settings)`
    width: 40px;
    height: 40px;
    color: black;
`;

const StyledHeader: any = styled.h1`
    margin-left: 0px;
`;

const StyledAvatar: any = styled(Avatar)`
    width: 70px;
    height: 70px;
`;

export interface ProfileDetails {
    fullName: string;
    id: string;
    age: string;
    email: string;
    location: string;
    gender: string;
    image: string;
};

const Profile: React.FunctionComponent = () => {
    const profileData = useSelector((state: any) => state.app.profileDetails);

    return (
        <StyledSection>
            <StyledFirstDiv>
                <StyledHeader>My Profile</StyledHeader>
                <StyledNavButton to={Routes.PROFILE_SETTINGS}><StyledSettings /></StyledNavButton>
            </StyledFirstDiv>
            <StyledAvatar alt="user image" src={profileData.image} />
            <CustomSpan title='Full Name:' messageDetail={profileData.fullName} />
            <CustomSpan title='Id:' messageDetail={profileData.id} />
            <CustomSpan title='Age:' messageDetail={profileData.age} />
            <CustomSpan title='Email:' messageDetail={profileData.email} />
            <CustomSpan title='Location:' messageDetail={profileData.location} />
            <CustomSpan title='Gender:' messageDetail={profileData.gender} />
        </StyledSection>
    )
};

export default Profile;
