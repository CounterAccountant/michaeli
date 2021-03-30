import { AnyAction, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
}

const initialState: LoginState = {
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // setValueInQuery: (state: LoginState, action: PayloadAction<IBookSearchKeysValues>) => {
        //     // state.query[action.payload.key] = action.payload.value;
        // },


    },
});

export const {  } = loginSlice.actions;


// export const getSearchBookQuery = (state: RootState): IBookSearch => state.search_books.query;
// export const getIsLoading = (state: RootState): boolean => state.search_books.is_loading;



export default loginSlice.reducer;

