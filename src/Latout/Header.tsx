import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #F5F6CE;
    margin-top: 0px;
    margin-bottom: auto;
`;

const Header: React.FunctionComponent = () => (
    <StyledDiv>
        <h3>App Bar</h3>
    </StyledDiv>
);

export default Header;
