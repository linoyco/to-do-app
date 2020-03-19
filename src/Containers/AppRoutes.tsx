import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History } from 'history';

import * as Routes from '../Lib/Routes';
import Layout from '../Components/Layout';
import ToDoList from './ToDoList';

interface IProps {
    history: History
}

const MyAppRoutes = (props: any) => {
    return (<Layout >{props.children}</Layout>);
};

const AppRoutes: React.FunctionComponent<IProps> = ({ history }) => (
    <Router>
        <Switch>
            <MyAppRoutes>
            <Route exact path={Routes.HOME} component={() => (<div>Hello, World!</div>)} />
            <Route exact path={Routes.TODOLIST} component={ToDoList} />
            </MyAppRoutes>
        </Switch>
    </Router>
);

export default AppRoutes;