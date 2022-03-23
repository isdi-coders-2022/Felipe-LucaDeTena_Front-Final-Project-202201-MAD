import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemsReducer from './item/item-reducer';
import loginRegisterReducer from './login-register/login-register-reducer';

// const preloadedState = {};

export const store = configureStore({
    reducer: {
        loginRegister: loginRegisterReducer,
        items: itemsReducer,
    },
    // preloadedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
