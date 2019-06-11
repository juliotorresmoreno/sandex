import { AnyAction } from "redux";
import { AuthState } from "./state";


export interface SetSessionAction extends AnyAction {
    session: AuthState
}
