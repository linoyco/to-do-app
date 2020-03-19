import * as React from 'react';
import styled from 'styled-components';
import { FormatListNumbered, MailOutline } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

const StyledDiv: any = styled.div`
    background-color: #5560CF;
    display: flex;
	align-items: center;
    border-radius: 10px; 
    padding: 3px;   
`;

const StyledListIcon: any = styled(FormatListNumbered)`
    color: white;
    margin-right: 5px;
    margin-left: auto;
`;


const StyledMessages: any = styled(MailOutline)`
    color: white;
    margin-left: 10px;
`;

const StyledAvatar: any = styled(Avatar)`
    margin-left: 5px;
`;

const Header: React.FunctionComponent = () => (
    <StyledDiv>
        <StyledAvatar alt="user image" src='https://i.pravatar.cc/300'/>
        <StyledMessages/>
        <StyledListIcon />
    </StyledDiv>
);

export default Header;
