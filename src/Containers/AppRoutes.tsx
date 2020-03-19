import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History } from 'history';

import * as Routes from '../Lib/Routes';
import Layout from '../Components/Layout';
import ToDoList from './ToDoList';
import Profile from './Profile';
import ProfileSettings from './ProfileSettings';

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
                <Route exact path={Routes.TODO_LIST} component={ToDoList} />
                <Route exact path={Routes.PROFILE} component={Profile} />
                <Route exact path={Routes.PROFILE_SETTINGS} component={ProfileSettings} />
            </MyAppRoutes>
        </Switch>
    </Router>
);

export default AppRoutes;