import React, { Fragment } from 'react';
import { Container, Button, Text, Form, Item as FormItem, Input, Label } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { withRouter, RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import l18n from '../../l18n';
import { State } from '../../../types/redux/state';
import { login, ILogin } from '../../actions/auth';
import { connect } from 'react-redux';

interface ISignInState {
    email: string
    password: string
}

interface ISignInProps extends RouteComponentProps {
    login: ILogin
}

const SignIn = class SignIn extends React.PureComponent<ISignInProps, ISignInState> {

    state: ISignInState = {
        email: '',
        password: ''
    }

    onInputChange = (name: string) => (text: string) => {
        const state: ISignInState = { ...this.state, [name]: text }
        this.setState(state);
    }

    onSignIn = () => {
        this.props.login({
            email: this.state.email,
            password: this.state.password
        });
    }

    render() {
        return (
            <Fragment>
                <Container style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <Form style={{ width: '100%' }}>
                        <FormItem stackedLabel>
                            <Label>{l18n.auth.input_email}</Label>
                            <Input
                                nativeID='email'
                                value={this.state.email}
                                onChangeText={this.onInputChange('email')}
                            />
                        </FormItem>
                        <FormItem stackedLabel>
                            <Label>{l18n.auth.input_password}</Label>
                            <Input
                                nativeID='password'
                                value={this.state.password}
                                onChangeText={this.onInputChange('password')}
                            />
                        </FormItem>
                        <Button
                            info onPress={this.onSignIn}
                            style={{ width: '100%', marginVertical: 10 }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>
                                {l18n.auth.signIn_button}
                            </Text>
                        </Button>
                        <Text style={{ width: '100%', textAlign: 'center', marginVertical: 15 }}>
                            O
                        </Text>
                        <Button
                            style={{ width: '100%', marginVertical: 10, backgroundColor: '#FF776F' }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>
                                <Ionicons name="logo-google" size={32} color="white" />
                                &nbsp;&nbsp;
                            {l18n.auth.signGoogle_button}
                            </Text>
                        </Button>
                        <Button style={{ width: '100%', marginVertical: 10, backgroundColor: '#FF776F' }}>
                            <Text style={{ textAlign: 'center', width: '100%' }}>
                                <Ionicons name='logo-facebook' size={32} color="white" />
                                &nbsp;&nbsp;
                            {l18n.auth.signFacebook_button}
                            </Text>
                        </Button>
                    </Form>
                </Container>
                <Button
                    onPress={() => this.props.history.push('/sign-up')}
                    success={true}
                    style={{ width: '100%' }}>
                    <Text style={{ textAlign: 'center', width: '100%' }}>
                        {l18n.auth.signUp_button}
                    </Text>
                </Button>
            </Fragment>
        );
    }
}

const mapProps = (state: State) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: bindActionCreators(login, dispatch)
});

export default connect(mapProps, mapDispatchToProps)(withRouter(SignIn));