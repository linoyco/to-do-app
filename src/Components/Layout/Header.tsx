import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #313131;
    display: flex;
    justify-content: center;
    border-radius: 10px;    
`;

const Header: React.FunctionComponent = () => (
    <StyledDiv>
        <h3 style={{color: '#FAFFA1'}}>App Bar</h3>
    </StyledDiv>
);

export default Header;
