import { AnyAction, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface LoginState {
    username: string;
    password: string;
    isLoggedIn: boolean;
}

const initialState: LoginState = {
    username: '',
    password: '',
    isLoggedIn: true,
};


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: LoginState, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginState, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setIsLoggedIn: (state: LoginState, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },


    },
});

export const { setUsername, setPassword, setIsLoggedIn } = loginSlice.actions;


export const getUsername = (state: RootState): string => state.login.username;
export const getPassword = (state: RootState): string => state.login.password;
export const getIsLoggedIn = (state: RootState): boolean => state.login.isLoggedIn;


export default loginSlice.reducer;

