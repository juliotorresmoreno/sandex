

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { State } from '../../types/redux/state';
import { AppState } from 'react-native';

const defaultState: State = {
    auth: {
        isLogged: false
    }
}

const store = createStore(reducers, defaultState, applyMiddleware(thunk));

AppState.addEventListener('change', function (state) {
    store.dispatch({
        type: '@state/change',
        state
    });
});

export default store;