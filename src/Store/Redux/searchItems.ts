import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api-space-blog-production.up.railway.app/'}),
    endpoints: builder => ({
        getItemByName: builder.query({
            query: (nome: string) => `search?nome=${nome}`
        })
    })
})


export default itemsApi.reducer


