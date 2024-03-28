import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import { task2Api } from "@/Api/api";

export const store = configureStore({
    reducer:{
        [task2Api.reducerPath]:task2Api.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(task2Api.middleware),
}) 

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;