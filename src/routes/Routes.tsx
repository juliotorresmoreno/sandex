

import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-native';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import { State } from '../../types/redux/state';
import Header from '../components/Header';
import FooterTabs from '../components/FooterTabs';
import { Content } from 'native-base';
import Chats from '../pages/Chats';
import History from '../pages/History';

interface IRoutesProps {
    isLogged: boolean
}

interface IRoutesState {

}

/**
 * 
 */
class Routes extends PureComponent<IRoutesProps, IRoutesState> {

    state: IRoutesState = {

    }

    render() {
        if (!this.props.isLogged) return <Auth />;

        return (
            <Fragment>
                <Header />
                <Content>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/chats' component={Chats} />
                    <Route exact path='/history' component={History} />
                </Content>
                <FooterTabs />
            </Fragment>
        );
    }
}

const mapState = (state: State) => ({
    isLogged: state.auth.isLogged
});

export default connect(mapState)(Routes);