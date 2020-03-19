import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.footer`
    background-color: #313131;
	display: flex;
	justify-content: center;
    align-items: flex-end;
    border-radius: 10px;
`;

const Footer: React.FunctionComponent = () => (
    <StyledDiv>
        <h3 style={{color: '#FAFFA1'}}>App Bar</h3>
    </StyledDiv>
);

export default Footer;
