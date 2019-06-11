import { AnyAction } from "redux";
import { auth } from "../actions/actionTypes";
import { AuthState } from '../../types/redux/state';
import { SetSessionAction } from '../../types/redux/auth';

const initialState: AuthState = {
    isLogged: false
};

export default (
    state = initialState,
    action: AnyAction | SetSessionAction
): AuthState => {
    let _action;
    console.log(action)
    if (action.type === auth.setSession) {
        _action = action as SetSessionAction;
        return {
            ...state,
            ..._action.session
        }
    }
    return state;
}