import {configureStore} from '@reduxjs/toolkit'
import { itemsApi } from './Redux/searchItems'
import itemsSlice from './Redux/itemsSlice'

const store = configureStore({
    reducer: {
        [itemsApi.reducerPath]: itemsApi.reducer,
        itemsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store