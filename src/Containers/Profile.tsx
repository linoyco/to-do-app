import * as React from 'react';
import { Settings } from '@material-ui/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as Routes from '../Lib/Routes';
import { REQ_PROFILE_DETAILS } from '../State/Actions/Profile/types';

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
    const dispatch: Dispatch = useDispatch();

    React.useEffect(() => {
        dispatch({ type: REQ_PROFILE_DETAILS });
    });

    const profileData = useSelector((state: any) => state.app.profileDetails);

    return (
        <StyledSection>
            {console.log(profileData)}
            <StyledFirstDiv>
                <StyledHeader>My Profile</StyledHeader>
                <StyledNavButton to={Routes.PROFILE_SETTINGS}><StyledSettings /></StyledNavButton>
            </StyledFirstDiv>
        </StyledSection>
    )
};

export default Profile;
