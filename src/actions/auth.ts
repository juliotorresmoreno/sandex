

import { GetState, AuthState } from '../../types/redux/state';
import { Dispatch } from 'redux';
import { SetSessionAction } from '../../types/redux/auth';
import { auth } from './actionTypes';

export interface ILoginRecord {
    email: string
    password: string
}

export type ILogin = (record: ILoginRecord) => Promise<any>

export const setSession = (session: AuthState): SetSessionAction => ({
    type: auth.setSession,
    session
});

export const login = (record: ILoginRecord) => {
    return async (dispatch: Dispatch<SetSessionAction>, getState: GetState) => {
        dispatch(setSession({
            isLogged: true,
            name: 'julio',
            lastname: 'torres',
            username: 'jtorres'
        }));
    }
}

export const logout = (dispatch: Dispatch<SetSessionAction>, getState: GetState) =>
    async () => {
        dispatch(setSession({
            isLogged: false
        }));
    }