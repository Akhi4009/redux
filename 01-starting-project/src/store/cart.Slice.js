import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantiy:0
},
reducers:{
    addToCart(state,action){
        const newItem=action.payload
        const existingItem=state.items.find(item=>item.id===newItem.id)
        state.totalQuantiy++
        if(!existingItem){
            state.items.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.title
            })
        }else{
            existingItem.quantity++
            existingItem.totalPrice=existingItem.totalPrice+newItem.price

        }

    },
    removeFromCart(state,action){
        const id=action.payload
        const existingItem=state.items.find(item=>item.id===id)
        state.totalQuantiy--
        if(existingItem.quantity===1){
            state.items=state.items.filter(item=>item.id!==id)

        }else{
            existingItem.quantity--;
            existingItem.totalPrice=existingItem.totalPrice-existingItem.price
        }
    }
}
        
})

export const{addToCart,removeFromCart}=cartSlice.actions


export default cartSlice.reducer