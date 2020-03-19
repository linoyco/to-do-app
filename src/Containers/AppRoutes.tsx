import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History } from 'history';
import { ConnectedRouter } from "connected-react-router";

import * as Routes from '../Lib/Routes';
import Layout from '../Components/Layout';

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
            </MyAppRoutes>
        </Switch>
    </Router>
);

export default AppRoutes;