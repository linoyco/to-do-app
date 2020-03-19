import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.footer`
    background-color: #252525;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const Footer: React.FunctionComponent = () => (
    <StyledDiv>
        <h2 style={{color: 'white'}}>App Bar</h2>
    </StyledDiv>
);

export default Footer;
