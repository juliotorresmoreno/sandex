

import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import l18n from '../../l18n';
import { withRouter, RouteComponentProps } from 'react-router';

interface IFooterTabsProps extends RouteComponentProps {

}

class FooterTabs extends Component<IFooterTabsProps> {
    handleGoPress = (path: string) => () => {
        this.props.history.push(path);
    }
    render() {
        const activeTab = {
            chats: this.props.location.pathname === '/chats',
            history: this.props.location.pathname === '/history'
        }
        return (
            <Footer>
                <FooterTab>
                    <Button
                        active={activeTab.chats}
                        onPress={this.handleGoPress('/chats')}>
                        <Text>{l18n.footer.tabChats}</Text>
                    </Button>
                    <Button
                        active={activeTab.history}
                        onPress={this.handleGoPress('/history')}>
                        <Text>{l18n.footer.tabHistory}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default withRouter(FooterTabs);