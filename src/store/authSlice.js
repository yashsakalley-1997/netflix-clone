import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{}
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setLoggedUser:(state,action)=>{
            state.user = action.payload
        },
        removedLoggedUser:()=>{
            return {}
        }
    }
})

export const {setLoggedUser,removedLoggedUser} = authSlice.actions;
export const authReducer = authSlice.reducer;