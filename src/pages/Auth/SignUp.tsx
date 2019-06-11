import React, { Fragment } from 'react';
import {
    Container, Button, Text, Form,
    Item as FormItem, Input, Label,
    CheckBox, ListItem, Body
} from 'native-base';
import { withRouter, RouteComponentProps } from 'react-router';
import l18n from '../../l18n';
import { TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';

interface ISignUpState {
    name: string
    lastname: string
    phone: string
    email: string
    password: string
    passwordConfirm: string
    terms: boolean
}

const SignUp = class SignUp extends React.PureComponent<RouteComponentProps, ISignUpState>{

    state: ISignUpState = {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: '',
        terms: false
    }

    onInputChange = (name: string) => (text: string) => {
        const state: ISignUpState = { ...this.state, [name]: text }
        this.setState(state);
    }

    onCheckChange = () => {
        this.setState({ terms: !this.state.terms })
    }

    render() {
        return (
            <Fragment>
                <Container style={{ padding: 10 }}>
                    <Form style={{ width: '100%' }}>
                        <FormItem stackedLabel>
                            <Label>{l18n.auth.input_name}</Label>
                            <Input
                                nativeID='name'
                                value={this.state.name}
                                onChangeText={this.onInputChange('name')}
                            />
                        </FormItem>
                        <FormItem stackedLabel>
                            <Label>{l18n.auth.input_lastname}</Label>
                            <Input
                                nativeID='lastname'
                                value={this.state.lastname}
                                onChangeText={this.onInputChange('lastname')}
                            />
                        </FormItem>
                        <FormItem stackedLabel>
                            <Label>{l18n.auth.input_phone}</Label>
                            <Input
                                nativeID='phone'
                                value={this.state.phone}
                                onChangeText={this.onInputChange('phone')}
                            />
                        </FormItem>
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
                        <FormItem stackedLabel>
                            <Label>{l18n.auth.input_passwordConfirm}</Label>
                            <Input
                                nativeID='passwordConfirm'
                                value={this.state.passwordConfirm}
                                onChangeText={this.onInputChange('passwordConfirm')}
                            />
                        </FormItem>
                        <FormItem style={{ paddingVertical: 15, paddingLeft: -20 }}>
                            <CheckBox
                                onPress={this.onCheckChange}
                                checked={this.state.terms}
                                color="green" />
                            <Body style={{ alignItems: 'flex-start', marginLeft: 20 }}>
                                <Text>{l18n.auth.check_terms}</Text>
                            </Body>
                        </FormItem>
                    </Form>
                </Container>
                <Button
                    onPress={() => this.props.history.push('/')}
                    success={true}
                    style={{ width: '100%' }}>
                    <Text style={{ textAlign: 'center', width: '100%' }}>
                        {l18n.auth.signUp_button}
                    </Text>
                </Button>
            </Fragment>
        );
    }
};

export default withRouter(SignUp);