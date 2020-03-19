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
    message: string,
    textAlign: string,
};

class CustomError extends React.Component<iCustomError, {}> {
    render(): React.ReactElement {
        return (
            <StyledErrorDiv visibility="visible" textAlign={this.props.textAlign}>{this.props.message}</StyledErrorDiv>
        );
    }
}

export default CustomError;