

import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-native';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import { State } from '../../types/redux/state';

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

        console.log(this.props)

        if (!this.props.isLogged) return <Auth />;

        return (
            <Fragment>
                <Route exact path='/' component={Home} />
            </Fragment>
        );
    }
}

const mapState = (state: State) => ({
    isLogged: state.auth.isLogged
});

export default connect(mapState)(Routes);