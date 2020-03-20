import * as React from 'react';
import { Box } from "@material-ui/core";
import styled from "styled-components";

interface IPropsStyle {
    visibility: string
    textAlign: string
};

const StyledErrorDiv = styled(Box) <IPropsStyle>`
	font-size: 12px;
	color: red;
	text-align: ${(props: IPropsStyle) => props.textAlign};
	height: 12px;
`;

interface iCustomError {
    message: string;
    textAlign: string;
};

const CustomError: React.FunctionComponent<iCustomError> = ({ message, textAlign }) => (
    <StyledErrorDiv visibility="visible" textAlign={textAlign}>{message}</StyledErrorDiv>
);

export default CustomError;