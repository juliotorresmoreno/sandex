import React, { Fragment } from 'react';
import { Route } from 'react-router-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Container } from 'native-base';
import Header from '../../components/Header';

const Auth = () => {
    return (
        <Fragment>
            <Header />
            <Container>
                <Route path='/sign-up' component={SignUp} />
                <Route path='/' exact component={SignIn} />
            </Container>
        </Fragment>
    );
}

export default Auth;