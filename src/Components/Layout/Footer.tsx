import * as React from 'react';
import styled from 'styled-components';

const StyledDiv: any = styled.footer`
    background-color: #5560CF;
	display: flex;
	justify-content: center;
    align-items: flex-end;
    border-radius: 10px;
`;

const Footer: React.FunctionComponent = () => (
    <StyledDiv>
        <h3 style={{color: 'white'}}>App Bar</h3>
    </StyledDiv>
);

export default Footer;
