import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        if (itemInCart.quantity < action.payload.stock) {
          itemInCart.quantity++;
        } else {
          console.error('ITEM IS NOT AVAILABLE ANYMORE')
        }
      } else {
        state.items.push({...action.payload, quantity: 1});
      }

      fetch('https://dummyjson.com/carts/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: state.items.map(item => Object({
            id: item.id,
            quantity: item.quantity,
          }))
        })
      })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  }
})

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
} = cartSlice.actions;