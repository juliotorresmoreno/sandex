

import React, { Fragment, PureComponent } from 'react';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './store';
import { NativeRouter } from 'react-router-native';


class Root extends PureComponent {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <NativeRouter>
                        <Routes />
                    </NativeRouter>
                </Provider>
            </Fragment >
        );
    }
}

export default Root;