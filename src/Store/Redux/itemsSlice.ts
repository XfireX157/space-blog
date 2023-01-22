import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from '../../http'

export const getItems = createAsyncThunk('items/getAll', async (__, thunkApi) => {
    try {
        const { data } = await http.get('/getAll')
        return { items: data.cards, url: data.url }
    } catch (err: any) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export const postItems = createAsyncThunk('items/postAll', async (data: any, thunkApi) => {
    try {
        const response = await http.post('/', data)
        return response
    } catch (err: any) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export const deletItems = createAsyncThunk('items/delet', async (dataID: Number, thunkApi) => {
    try {
        const response = await http.delete(`/${dataID}`)
        return response
    } catch (err: any) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export const updateItems = createAsyncThunk('items/update', async ({id, data}: any, thunkApi) => {
    try{
        const response = await http.patch(`/${id}`, data)
        return response.data
    }catch(err: any){
        return thunkApi.rejectWithValue(err.message)
    }
})

interface Items {
    idProdutos: number
    nome: string
    category: string
    price: string
    image: string
}
interface ItemSlice {
    post: Items[],
    url: string,
    loading: boolean
}

const initialState: ItemSlice = {
    post: [],
    url: '',
    loading: false
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItems.pending, (state, action) => {
                state.loading = true
            })

            .addCase(getItems.fulfilled, (state, action: any) => {
                const { items, url } = action.payload
                state.loading = false
                state.post = items;
                state.url = url;
            })

            .addCase(postItems.pending, (state, action) => {
                state.loading = true
            })

            .addCase(postItems.fulfilled, (state, action: any) => {
                state = state.post = action.payload
            })

            .addCase(deletItems.fulfilled, (state, action: any) => {
                state.loading = false
                state.post.filter((items) => items.idProdutos !== action.payload)
            })

            .addCase(updateItems.fulfilled, (state, action) => {
                state.loading = false
                state.post = action.payload
            })
    }
})

export default itemsSlice.reducer