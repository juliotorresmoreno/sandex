

import React, { Fragment } from 'react';
import { Left, Button, Icon, Header, Body, Title, Right, Text } from 'native-base';
import l18n from '../../l18n';
import { withRouter, RouteComponentProps } from 'react-router';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const NavBar = (props: RouteComponentProps) => {
    const statusBarHeight = getStatusBarHeight();
    return (
        <Fragment>
            <Header noShadow={true} style={{
                backgroundColor: '#33B8BA',
                paddingTop: statusBarHeight - 5,
                height: statusBarHeight + 40,
                display: 'flex'
            }}>
                <Left style={{ flex: 1 }}>
                    {props.location.pathname !== '/' ? (
                        <Button
                            onPress={() => props.history.go(-1)}
                            transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    ) : false}
                </Left>
                <Body style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>
                        {l18n.title}
                    </Text>
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>
        </Fragment>
    );
}

export default withRouter(NavBar);