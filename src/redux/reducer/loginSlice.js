import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "auth",
    initialState: {
        isUserLoggedIn: sessionStorage.getItem('isUserLoggedIn'),
        username: sessionStorage.getItem('username'),
        password: '',
        role: sessionStorage.getItem('role'),
    },
    reducers: {
        login: (state, action) => {
            const user = action.payload;
            debugger
            state.username = user.username;
            state.password = user.password;

            state.username === 'testAdmin@gmail.com' && state.password === '12345yuiopp'
                ? state.role = 'Admin'
                : state.role = 'User';

            state.isUserLoggedIn = true;

            sessionStorage.setItem('role', state.role);
            sessionStorage.setItem('isUserLoggedIn', state.isUserLoggedIn);
            sessionStorage.setItem('username', state.username);
        },
        logout: (state, action) => {
            state.username = '';
            state.role = '';
            state.password = '';
            state.isUserLoggedIn = false;

            sessionStorage.removeItem('isUserLoggedIn');
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('role');
        }
    },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;