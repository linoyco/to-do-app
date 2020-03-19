import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Flex = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	align-content: center;
`;

const Content = styled.section`
	min-height: 500px;
	max-height: 500px;
	display: flex;
`;

const Index: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
    <Flex>
        <Header />
        <Content>{children}</Content>
        <Footer />
    </Flex>
);

export default Index;