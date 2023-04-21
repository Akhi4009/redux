import {createSlice} from "@reduxjs/toolkit"

const uiSlice=createSlice({
    name:"ui",
    initialState:{cartvisible:false},
    reducers:{
        toggle(state){
            state.cartvisible=!state.cartvisible
        }
    }
})
export const {toggle}=uiSlice.actions
export default uiSlice.reducer