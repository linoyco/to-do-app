import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './State/Reducers';
import rootSaga from './State/Sagas/index';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(history), compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>, document.getElementById('root')
);
