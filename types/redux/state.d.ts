

export interface AuthState {
    name?: string
    lastname?: string
    username?: string
    isLogged: boolean
}

export interface State {
    auth: AuthState
}


export type GetState = () => State;