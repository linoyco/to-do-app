import * as React from 'react';
import { Settings } from '@material-ui/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

const Profile: React.FunctionComponent = () => (
    <StyledSection>
        <StyledFirstDiv>
            <StyledHeader>My Profile</StyledHeader>
            <StyledNavButton to={Routes.PROFILE_SETTINGS}><StyledSettings /></StyledNavButton>
        </StyledFirstDiv>
    </StyledSection>
);

export default Profile;
