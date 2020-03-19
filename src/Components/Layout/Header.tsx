import * as React from 'react';
import styled from 'styled-components';
import { FormatListNumbered, MailOutline, PersonOutline } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import * as Routes from '../../Lib/Routes';

const StyledNavButton: any = styled(NavLink)`
    margin-left: 10px;
`;

const StyledNavButtonList: any = styled(NavLink)`
    margin-right: 5px;
    margin-left: auto;
`;

const StyledDiv: any = styled.div`
    background-color: #5560CF;
    display: flex;
	align-items: center;
    border-radius: 10px; 
    padding: 3px;
`;

const StyledListIcon: any = styled(FormatListNumbered)`
    color: white;
`;

const StyledMessages: any = styled(MailOutline)`
    color: white;
`;

const StyledAvatar: any = styled(Avatar)`
    margin-left: 5px;
`;

const StyledProfile: any = styled(PersonOutline)`
    color: white;
`;

const Header: React.FunctionComponent = () => (
    <StyledDiv>
        <StyledAvatar alt="user image" src='https://i.pravatar.cc/300' />
        <StyledNavButton to={Routes.PROFILE}><StyledProfile /></StyledNavButton>
        <StyledNavButton to={''}><StyledMessages /></StyledNavButton>
        <StyledNavButtonList to={Routes.TODO_LIST}><StyledListIcon /></StyledNavButtonList>
    </StyledDiv>
);

export default Header;
