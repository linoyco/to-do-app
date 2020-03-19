import * as React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { History } from 'history';
import AppRoutes from './Containers/AppRoutes';

const StyledDiv = styled.section`
  background-color: #EAE9E9;
  width: 70%;
  display: flex;
	justify-content: center;
	align-items: center;
  align-content: center;
  margin: auto;
`;

interface IProps {
  history: History;
}

const App: React.FunctionComponent<IProps> = ({ history }) => (
  <StylesProvider injectFirst={true}>
    <StyledDiv>
      <AppRoutes history={history} />
    </StyledDiv>
  </StylesProvider>
);

export default App;
