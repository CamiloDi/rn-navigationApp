import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeIcon: (iconName: string) => void;
    signOut: () => void;
    changeUserName: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({children}: any) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    const signIn = () => {
        dispatch({type: 'signIn'});
    };
    const changeIcon = (iconName: string) => {
        dispatch({type: 'changeIcon', payload: iconName});
    };
    const changeUserName = (userName: string) => {
        dispatch({type: 'changeUserName', payload: userName});
    };
    const signOut = () => {
        dispatch({type: 'signOut'});
    };
    return (<AuthContext.Provider value={{
        authState,
        signIn,
        changeIcon,
        signOut,
        changeUserName,
    }}>{children}
    </AuthContext.Provider >);
};

