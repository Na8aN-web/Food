import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    cartQuantity: 0,
    itemTotal: 0
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            if(itemIndex >= 0){
                // pass
            }
            else{
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.items.push(tempProduct)
            }  
        },
        increase(state, action){
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.items[itemIndex].cartQuantity  +=1
            }
        },

        reduce(state, action){
            const itemIndex = state.items.findIndex(cartitem => cartitem.id === action.payload.id)

            if(state.items[itemIndex].cartQuantity > 1){
                state.items[itemIndex].cartQuantity -= 1
            }
            else if(state.items[itemIndex].cartQuantity === 1){
               const nextCardItems = state.items.filter(
                (newitem) => newitem.id !== action.payload.id
               );
               document.getElementById(`${action.payload.id}`).firstChild.style.display = "none"
               state.items = nextCardItems;
            }
        },
        clearCart(state, action){
            state.items = [];
            const items = document.querySelectorAll(".menu-item")
            for (let item of items){
                item.firstChild.style.display = "none"
            }
        },
        getTotal(state, action){
            let {total, quantity} = state.items.reduce((cartTotal, item)=> {
                const {price, cartQuantity} = item;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
        }
    }
})

export default productSlice.reducer
export const productActions = productSlice.actions