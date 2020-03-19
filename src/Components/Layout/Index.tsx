import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Grid = styled.div`
	width: 100vw;
`;

const Content = styled.section`
	 margin: 200px;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
`;

const Index: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
    <Grid>
        <Header />
        <Content>{children}</Content>
        <Footer />
    </Grid>
);

export default Index;