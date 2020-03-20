import * as React from 'react';
import { Settings } from '@material-ui/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import * as Routes from '../Lib/Routes';

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
    id: number;
    age: number;
    email: string;
    location: string;
    gander: string | string;
    image: string;
};

const Profile: React.FunctionComponent = () => {
    const profileData = useSelector((state: any) => state.app.profileDetails);

    return (
        <StyledSection>
            {console.log(profileData)}
            <StyledFirstDiv>
                <StyledHeader>My Profile</StyledHeader>
                <StyledNavButton to={Routes.PROFILE_SETTINGS}><StyledSettings /></StyledNavButton>
            </StyledFirstDiv>
            <StyledAvatar alt="user image" src={profileData.image} />
            <span>Full Name: {profileData.fullName}</span>
            <span>Id: {profileData.id}</span>
            <span>Age: {profileData.age}</span>
            <span>Email: {profileData.email}</span>
            <span>Location: {profileData.location}</span>
            <span>Gender: {profileData.gander}</span>
        </StyledSection>
    )
};

export default Profile;
