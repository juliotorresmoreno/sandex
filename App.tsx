

import React, { PureComponent } from 'react';
import Root from './src/Root';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

interface IAppState {
    loaded: boolean
}

class App extends PureComponent<any, IAppState> {

    state: IAppState = {
        loaded: false
    }

    async componentDidMount() {
        try {
            await Font.loadAsync({
                'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });

            this.setState({
                loaded: true
            });
        } catch (error) {

        }
    }

    render() {
        if (this.state.loaded)
            return <Root />;
        return false;
    }
}

export default App;