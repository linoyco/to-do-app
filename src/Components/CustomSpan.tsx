import * as React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    margin: 15px;
`;

const StyledTitle = styled.span`
    color: #000A76;
    font-weight: bold;
`;

const StyledDetail = styled.span`
    margin-left: 10px;
`;

interface IProps {
    title: string;
    messageDetail: string;
}

const CustomSpan: React.FunctionComponent<IProps> = ({ title, messageDetail }) => (
    <StyledDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledDetail>{messageDetail}</StyledDetail>
    </StyledDiv>
);

export default CustomSpan;