import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice"
import cartReducer from "./cart.Slice"

const store=configureStore({
    reducer:{
        ui:uiReducer,
        cart:cartReducer
    }
})
export default store