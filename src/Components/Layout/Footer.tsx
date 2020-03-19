import * as React from 'react';
import styled from 'styled-components';
import { ExitToApp } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const StyledDiv: any = styled.footer`
    background-color: #5560CF;
	display: flex;
	justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 3px;
`;

const StyledLogOutIcon: any = styled(ExitToApp)`
    color: white;
`;

const StyledNavButton: any = styled(NavLink)`
    margin-right: 5px;
    margin-left: auto;
`;

const Footer: React.FunctionComponent = () => (
    <StyledDiv>
        <StyledNavButton to={''}><StyledLogOutIcon /></StyledNavButton>
    </StyledDiv>
);

export default Footer;
