import * as React from 'react';
import styled from 'styled-components';

const StyledSection: any = styled.section`
    width: 100%;
    min-height: 470px;
    max-height: 470px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const StyledHeader: any = styled.h1`
    margin-left: auto;
    margin-right: auto;
`;

const ToDoList: React.FunctionComponent = () => (
    <StyledSection>
        <StyledHeader>ToDo List</StyledHeader>
    </StyledSection>
);

export default ToDoList;
