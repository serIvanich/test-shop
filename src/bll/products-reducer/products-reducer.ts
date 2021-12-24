
import {createSlice, PayloadAction} from "@reduxjs/toolkit"


const slice = createSlice({

  name: 'products',
  initialState: [] as Array<ProductType>,
  reducers: {

    getProducts(state, action: PayloadAction< Array<ProductType>>) {
      state.push(...action.payload)
    }

  },
})

export const productsReducer = slice.reducer

export const actionProducts = slice.actions


export type ProductType = {
  id: number 
  name: string
  price: number
  photo: any
  info: string
  category: string

}


