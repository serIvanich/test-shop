import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ProductType} from "../products/products-reduser";

const slice = createSlice({

  name: 'shoppingCart',
  initialState: {
    products: [] as Array<ShoppingCartType>,

  },
  reducers: {
    addProductToCart(state, action: PayloadAction< ProductType>) {
      state.products.push(action.payload)
    }
  },
  extraReducers: (builder) => {
      return builder
  }
})

export const shoppingCartReducer = slice.reducer
export const actionShoppingCart = slice.actions

type ShoppingCartType = {
  id: number 
  name: string
  price: number
  photo: any
  info: string
  category: string

}


//redusers
// changeTodoListFilter(state, action: PayloadAction<{ value: FilterValuesType, todoListId: string }>) {
//   const index = state.findIndex(tl => tl.id === action.payload.todoListId)
//   state[index].filter = action.payload.value
// },
// changeTodoListEntityStatus(state, action: PayloadAction<{ id: string, entityStatus: RequestStatusType }>) {
//   const index = state.findIndex(tl => tl.id === action.payload.id)
//   state[index].entityStatus = action.payload.entityStatus
// }

//extra-reduser
// builder.addCase(fetchTodolist.fulfilled, (state, action) => {
//   return action.payload.todoLists.map((tl: TodolistType) => ({...tl, filter: 'all', entityStatus: "idle"}))
// })
// builder.addCase(removeTodoList.fulfilled, (state, action) => {
//   const index = state.findIndex(tl => tl.id === action.payload.todoListId)
//   if (index > -1) {
//       state.splice(index, 1)
//   }
// })
// builder.addCase(addTodoList.fulfilled, (state, action) => {
//   state.unshift({...action.payload.todoList, filter: 'all', entityStatus: "idle"})
// })
// builder.addCase(changeTodoListTitle.fulfilled, (state, action) => {
//   const index = state.findIndex(tl => tl.id === action.payload.todoListId)
//   state[index].title = action.payload.title
// })
