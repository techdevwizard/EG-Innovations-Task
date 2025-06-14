
import { LOGIN_USER, GET_USER,LOG_OUT } from '../action/UserAction';

export interface UserState {
    token: string | null;
    username: string;
}

const initialState: UserState = {
    token: localStorage.getItem('token') || null,
    username: '',
};

export const userReducer = (
    state: UserState = initialState,
    action: any
): UserState => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.name,
            };
            case GET_USER:
            return {
                ...state,
                username: action.payload, 
            };
            case LOG_OUT:
                return{
                    token:null,
                    username:''
                }
        default:
            return state;
    }
};
