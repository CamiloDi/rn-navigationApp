import {authInitialState, AuthState} from './AuthContext';

type AuthAction = {type: 'signIn', } | {type: 'changeIcon', payload: string}
    | {type: 'signOut'} | {type: 'changeUserName', payload: string};


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {...state, isLoggedIn: true, userName: 'Nobody'};
        case 'changeIcon':
            return {...state, favoriteIcon: action.payload};
        case 'changeUserName':
            return {...state, userName: action.payload};
        case 'signOut':
            return authInitialState;
        default:
            return state;
    }
};
