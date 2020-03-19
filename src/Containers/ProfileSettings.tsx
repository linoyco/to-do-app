import * as React from 'react';
import styled from 'styled-components';

const StyledSection: any = styled.section`
    width: 100%;
    min-height: 470px;
    max-height: 470px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const StyledHeader: any = styled.h1`
    margin-right: auto;
    margin-left: auto;
`;

const ProfileSettings: React.FunctionComponent = () => (
    <StyledSection>
        <StyledHeader>Profile Settings:</StyledHeader>
    </StyledSection>
);

export default ProfileSettings;
