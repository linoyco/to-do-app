import * as React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';
import { History } from 'history';
import AppRoutes from './Containers/AppRoutes';
import { REQ_PROFILE_DETAILS } from './State/Actions/Profile/types';

const StyledDiv: any = styled.section`
  background-color: white;
  width: 70%;
  display: flex;
	justify-content: center;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  font-family: Arial;
`;

interface IProps {
  history: History;
}

const App: React.FunctionComponent<IProps> = ({ history }) => {
  const dispatch: Dispatch = useDispatch();

  React.useEffect(() => {
      dispatch({ type: REQ_PROFILE_DETAILS });
  });

  return (
    <StylesProvider injectFirst={true}>
      <StyledDiv>
        <AppRoutes history={history} />
      </StyledDiv>
    </StylesProvider>
  )
};

export default App;
