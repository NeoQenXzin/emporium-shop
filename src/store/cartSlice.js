import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (existingIndex >= 0) {
                state.items[existingIndex].quantity += 1;
                state.totalAmount += state.items[existingIndex].price;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
                state.totalAmount += action.payload.price;
            }
        },
        removeItem: (state, action) => {
            const existingIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (existingIndex >= 0 && state.items[existingIndex].quantity > 1) {
                state.items[existingIndex].quantity -= 1;
                state.totalAmount -= state.items[existingIndex].price;
            } else if (existingIndex >= 0) {
                state.totalAmount -= state.items[existingIndex].price * state.items[existingIndex].quantity;
                state.items.splice(existingIndex, 1); // Supprime item si quantité < 1 
            }
        },

        deleteItem: (state, action) => {
            const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingIndex >= 0) {
                state.totalAmount -= state.items[existingIndex].price * state.items[existingIndex].quantity;
                state.items.splice(existingIndex, 1);
            }
        },
    },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;